import React, { useState, type FormEvent } from "react";
import FormLayout from "./formLayout";
import { Link } from "react-router-dom";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useTheme } from "../../utils/Context/ThemeProvider";
function SignIn() {
  const [choiseBar, setChoiseBar] = useState<"email" | "qrcode">("email");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <FormLayout>
      <h1 className="!font-[Irancell1] text-2xl font-bold">ورود</h1>{" "}
      <div className="relative  ">
        <div className="flex items-center gap-6 justify-start font-semibold text-base ">
          <p
            className={`${choiseBar === "email" ? "" : "text-subtle"}`}
            onClick={() => setChoiseBar("email")}
          >
            ایمیل/شماره تلفن
          </p>
          <p
            className={`${choiseBar === "qrcode" ? "" : "text-subtle"}`}
            onClick={() => setChoiseBar("qrcode")}
          >
            QR Code
          </p>
        </div>
        <div
          className={`absolute transition-all duration-300 ease-in top-7 ${
            choiseBar === "email" ? "right-8" : "right-38"
          }  w-[34px] h-[5px] bg-black dark:bg-white rounded-full `}
        ></div>
      </div>
      <div className="w-full ">
        {choiseBar === "email" ? (
          <div className="flex flex-col items-center gap-12 w-fit">
      <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full">
      <div className="relative border border-gray-600 p-3 rounded-md z-10 bg-transparent">
  <input
    type="text"
    placeholder="ایمیل / شماره تلفن"
    name="emailOrPhone"
    id="emailOrPhone"
    className=" border-none shadow-none focus:outline-none w-full focus:bg-[unset]"
    style={
      {backgroundColor:"unset" }
      
    }
  />
  <label
    htmlFor="emailOrPhone"
    className="absolute -top-4 right-2 bg-white dark:bg-[#222223] p-1 rounded-sm text-[13px]"
  >
    ایمیل / شماره تلفن
  </label>
</div>

        <button
          className={` "dark:bg-green-800 bg-zinc-800 "
              
             text-white w-full  py-3 rounded-xl shadow-lg text-xl font-medium`}
        >
          ثبت نام
        </button>
      </form>
            <div className="grid grid-cols-3 gap-2 lg:ga-4 xl:gap-6">
              <div className=" rounded-full shadow-sm border border-gray-300">
                <div className="flex items-center justify-center gap-2 xl:gap-3 py-1 lg:py-3">
                  <span className="text-base  font-medium text-center ">
                    Apple
                  </span>
                  <img
                    src={
                      isDark
                        ? "https://assets.staticimg.com/g-biz/externals/2022-06-01/809a523014f5ccf5.svg"
                        : "https://assets.staticimg.com/g-biz/externals/2022-06-01/e386f36bcb9df7af.svg"
                    }
                    alt="Apple-icon"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
              <div className="  rounded-full shadow-sm border border-gray-300">
                <div className="flex items-center justify-center  gap-1 xl:gap-3 py-1 lg:py-3">
                  <span className="text-base  font-medium text-center ">
                    Google
                  </span>
                  <img
                    src="https://assets.staticimg.com/g-biz/externals/2022-06-01/dedfe0e901fb83a6.svg"
                    alt="Apple-icon"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="rounded-full shadow-sm border border-gray-300">
                <div className="flex items-center justify-center  gap-2 xl:gap-3 py-1  lg:py-3">
                  <span className="text-base  font-medium">Telegram</span>
                  <img
                    src="https://assets.staticimg.com/g-biz/externals/2022-06-01/4104a098d1e6ac32.svg"
                    alt="Apple-icon"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12 items-center justify-center">
            <div className="rounded-xl border shadow-2xl border-[#1d1d1d14] w-[260px] h-[260px]">
              <img
                src="/images/frame.png"
                alt="qr-code"
                className="object-cover rounded-xl "
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-subtle ">
              <QrCodeScannerIcon />
              <p>
                اپلیکیشن ماکوین رو باز کنید و با اسکن کد QR وارد حساب خود شوید.
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${
          choiseBar === "qrcode" && "self-center"
        } flex items-center gap-1`}
      >
        <p className="text-subtle">آیا حساب کاربری ندارید؟</p>
        <Link
          to="/register/signup"
          className="font-medium underline hover:text-green-500"
        >
          ثبت‌نام
        </Link>
      </div>
    </FormLayout>
  );
}

export default SignIn;
