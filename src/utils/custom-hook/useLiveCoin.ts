import { useEffect, useState } from "react";

export type CoinPrice = {
  symbol: string;
  price: string;
  ["24h_ch"]: number;
};

export default function useLiveCoin(symbol: string) {
  const [coin, setCoin] = useState<CoinPrice | null>(null);

  useEffect(() => {
    if (!symbol) return;
    const socket = new WebSocket("wss://api.wallex.ir/ws");
    socket.addEventListener("open", () => {
      socket.send(JSON.stringify(["subscribe", { channel: "all@price" }]));
    });

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

 
        if (Array.isArray(data) && data[0] === "all@price") {
          const incomingCoin: CoinPrice = data[1];

          if (incomingCoin.symbol === symbol) {
            setCoin(incomingCoin);
          }
        }
      } catch (err) {
        console.error("parse error:", err);
      }
    };

    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("message", handleMessage);
      socket.close();
    };
  }, [symbol]);

  return { coin };
}
