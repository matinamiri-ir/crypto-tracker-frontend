import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Market, OldMarket } from "../utils/types/markets";

interface CoinInfo {
  success: boolean;
  data: {
    nmSymbol: Market;
    omSymbol: OldMarket;
  };
}

function Trade() {
  const [nmCoin, setNmCoin] = useState<Market | null>(null);
  const [omCoin, setOmCoin] = useState<OldMarket | null>(null);

  const { symbol } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!symbol) navigate("/trade/BTCTMN");
  }, [symbol]);

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const { data } = await axios.get<CoinInfo>(
          `https://crypto-tracker-backend-xt56.onrender.com/api/market/${symbol}`
        );
        setNmCoin(data.data?.nmSymbol);
        setOmCoin(data.data?.omSymbol);
      } catch (err) {
        console.error("❌ Error fetching market:", err);
      }
    };
    fetchMarket();

  }, [symbol]);

  return (
    <main className="grid grid-row-3 grid-cols-1">
      <section className="flex items-center justify-between">
        <div className="flex  itesm-center gap-2">
          <img
            src={omCoin?.baseAsset_svg_icon}
            alt={nmCoin?.base_asset}
            width={36}
            height={36}
          />
          <div className="flex flex-col gap-2 items-start text-sm font-mono">
            <div className="flex items-center">
              <span className="text-subtle">{nmCoin?.quote_asset}</span>

              <span className="text-subtle">\</span>
              <span>{nmCoin?.base_asset}</span>
            </div>
            <div className="flex items-center text-sm font-mono">
              <span className="text-subtle">{nmCoin?.fa_quote_asset}</span>
              <span className="text-subtle">\</span>
              <span>{nmCoin?.fa_base_asset}</span>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}

export default Trade;
