// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";
import { useTheme } from "../../utils/Context/ThemeProvider";

function MiniChart({ symbol }: { symbol: string }) {
  const controlledSymbol = symbol === "USDTTMN" ? "USDT" : symbol;

  const container = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState<string>("light");
  useEffect(() => {
    if (theme === "dark") setIsDark("dark");
    if (theme === "light") setIsDark("light");
  }, [theme]);
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: controlledSymbol,
      chartOnly: true,
      dateRange: "12M",
      noTimeScale: true,
      colorTheme: isDark,
      isTransparent: true,
      locale: "en",
      width: 250,
      autosize: true,
      height: 80,
      timezone: "Asia/Tehran",
    });
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(MiniChart);
