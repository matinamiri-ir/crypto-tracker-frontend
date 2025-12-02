import { ArrowDropDownOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import useLiveCoin, {
  type CoinPrice,
} from "../../utils/custom-hook/useLiveCoin";
import NumberViewer from "./NumberViewer";
import axios, { isAxiosError } from "axios";
import { useUser } from "../../utils/Context/UserProvider";
import toast from "react-hot-toast";
const suggestPrice = ["5,000,000", "10,000,000", "15,000,000", "25,000,000"];
function Buy() {
  const { refreshUser, user } = useUser();
  const [searchParams, setSearchParanms] = useSearchParams();
  const [amount, setAmount] = useState<number>(0);
  const [from_coin, setFrom_coin] = useState<"TMN" | "USDT">("TMN");
  const [to_coin, setTo_coin] = useState<string>("BTC");
  const [destinationPrice, setDestinationPrice] = useState<CoinPrice | null>(
    null
  );
  const [sourceInput, setSourceInput] = useState<string>("");
  const [destinInput, setDistinInput] = useState<string>("");
  const [destinationRaw, setDestinationRaw] = useState<number>(0);
  const source = searchParams.get("source");
  const destination = searchParams.get("destination");
  console.log(destination);
  const symbol = source === "TMN" ? `${destination}TMN` : `${destination}USDT`;
  const { coin } = useLiveCoin(symbol);

  useEffect(() => {
    if (coin) {
      console.log(coin);
      setDestinationPrice(coin);
    } else {
      console.log("coin not found");
    }
  }, [coin]);
  const handleSourceInput = async (input: string) => {
    input = input.trim();
    const onlyNumbers = input.replace(/[^0-9۰-۹]/g, "");

    const eng = onlyNumbers.replace(
      /[۰-۹]/g,
      (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]
    );

    const num = Number(eng);
    if (!isNaN(num)) {
      let fractionDigits = 12;
      if (num >= 1_000 && num < 10_000) fractionDigits = 10;
      else if (num >= 10_000 && num < 100_000) fractionDigits = 8;
      else if (num >= 100_000 && num < 1_000_000) fractionDigits = 6;
      else if (num >= 1_000_000 && num < 10_000_000) fractionDigits = 4;
      else if (num >= 10_000_000 && num < 100_000_000) fractionDigits = 3;
      else if (num >= 100_000_000 && num < 1_000_000_000) fractionDigits = 2;
      else if (num >= 1_000_000_000) fractionDigits = 1;

      setSourceInput(num.toLocaleString("fa-IR"));
      const selectedPrice = to_coin === "TMN" ? coin?.price : coin?.price;
      const setCoinPrice = Number(eng) / Number(selectedPrice);
      setDestinationRaw(setCoinPrice);
      setDistinInput(
        setCoinPrice.toLocaleString("fa-IR", {
          minimumFractionDigits: 0,
          maximumFractionDigits: fractionDigits,
        })
      );
    } else {
      setSourceInput("");
    }
  };
  const handleDistionationInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    let onlyNumbers = input.replace(/[^0-9.]/g, "");
    const [integerPart, ...decimalParts] = onlyNumbers.split(".");
    if (decimalParts.length > 0) {
      onlyNumbers = integerPart + "." + decimalParts.join("");
    }
    if (!onlyNumbers) {
      setDistinInput("");
      setSourceInput("");
      return;
    }
    const num = Number(onlyNumbers);
    setDestinationRaw(num);
    setDistinInput(onlyNumbers);
    if (!isNaN(num)) {
      const selectedPrice = to_coin === "TMN" ? coin?.price : coin?.price;
      const setCoinPrice = Number(num) * Number(selectedPrice);
      setSourceInput(
        setCoinPrice.toLocaleString("fa-IR", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 3,
        })
      );
    }
  };
  const handleBuyAction = async () => {
    try {
      console.log("🔄 Sending buy request...", {
        coin: destination,
        amount: destinationRaw,
        price: Number(coin?.price),
        currency: "TMN",
      });

      const response = await axios.post(
        "https://crypto-tracker-backend-xt56.onrender.com/api/users/me/buy",
        {
          coin: destination,
          amount: destinationRaw,
          price: Number(coin?.price),
          currency: "TMN",
        },
        {
          withCredentials: true, // 🆕 اگر از cookie استفاده می‌کنید
        }
      );

      if (response.data.success) {
        toast.success(`خرید موفق: ${destinationRaw} ${destination}`);
        setDistinInput("");
        setSourceInput("");
        refreshUser();
        console.log(user?.wallet.balance);
      } else {
        toast.error(`خطا: ${response.data.message}`);
      }
    } catch (error) {
      console.error("❌ Buy failed:", error);

      // نمایش خطای دقیق‌تر
      if (isAxiosError(error) && error.response) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error("خطای شبکه در انجام خرید");
      }
    }
  };
  return (
    <section className="flex flex-col gap-8 w-full ">
      <div className="flex items-center gap-0 w-full justify-between   shadow-xl overflow-hidden rounded-xl  ">
        <div className="inline-flex items-center justify-center w-[calc(50%+8px)]  font-bold  -skew-x-20 bg-green-600/60  p-2 -mr-2 overflow-hidden text-white">
          <h6 className="skew-x-20 ">خرید</h6>
        </div>
        <div className="inline-flex items-center justify-center w-[calc(50%+8px)] -skew-x-20 p-2 -ml-2 overflow-hidden  font-bold bg-gray-200/60 ">
          <h6 className="skew-x-20">فروش</h6>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>پرداخت میکنم</span>
          <div className="flex items-center gap-1 text-base text-subtle">
            <span>موجودی:</span>
            <span>TMN</span>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border rounded-lg border-gray-200 p-3">
          <div className="flex items-center gap-1 text-sm text-subtle">
            <ArrowDropDownOutlined />
            <span>عک</span>
            <span className="text-lg">TMN</span>
          </div>
          <span className="text-blue-500 text-sm">همه موجودی</span>
          <input
            type="text"
            value={sourceInput}
            onChange={(e) => handleSourceInput(e.target.value)}
            className="outline-none border-none flex-1 h-ful "
            dir="ltr"
            placeholder="90,000 ~ 50,000,000"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4 w-full justify-evenly">
          {suggestPrice.map((p) => (
            <button
              className="p-2 px-3 rounded-full border border-gray-200/40 text-center"
              key={p}
              onClick={() => handleSourceInput(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>دریافت میکنم</span>
        </div>
        <div className="flex items-center gap-2 border rounded-lg border-gray-200 p-3">
          <div className="flex items-center gap-1 text-sm text-subtle">
            <ArrowDropDownOutlined />
            <span>عک</span>
            <span className="text-lg">BTC</span>
          </div>
          <input
            type="text"
            className="outline-none border-none flex-1 h-ful "
            value={destinInput}
            onChange={handleDistionationInput}
            dir="ltr"
            placeholder="0.0"
          />
        </div>
        <div className="flex items-center justify-between">
          <p>
            قیمت <span>بیت کوین</span>
          </p>
          <div className="flex items-center gap-1">
            <NumberViewer value={coin?.price as string} />
            <span className="text-subtle text-sm">تومان</span>
          </div>
        </div>
      </div>
      <Button
        color="success"
        variant="contained"
        sx={{
          padding: "8px 4 px ",
          borderRadius: "8px",
          fontSize: "20px",
        }}
        type="submit"
        onClick={handleBuyAction}
      >
        خرید آسان
      </Button>
    </section>
  );
}

export default Buy;
