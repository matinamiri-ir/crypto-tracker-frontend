import React, { useEffect, useRef, useState } from "react";

interface DigitInfo {
  digit: string;
  flag: number; 
  isComma?: boolean;
}

interface NumberViewerProps {
  value: string;
}

export default function NumberViewer({ value }: NumberViewerProps) {
  const [digits, setDigits] = useState<DigitInfo[]>([]);
  const [highlight, setHighlight] = useState(false);
  const prevValueRef = useRef<string | null>(null);

  // جدا کردن سه رقمی از راست
  function formatNumberGrouped(num: string): string {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if (!value) return;

    const cleanPrev = prevValueRef.current ?? "";
    const cleanNew = value;

    let flagProp = 0;

    // مقایسه بدون کاما
    const comparison: DigitInfo[] = cleanNew.split("").map((d, i) => {
      let flag = 0;

      if (flagProp === 0) {
        if (cleanPrev[i] && d > cleanPrev[i]) flag = 1;
        else if (cleanPrev[i] && d < cleanPrev[i]) flag = -1;

        if (flag !== 0) flagProp = flag;
      } else {
        flag = flagProp;
      }

      return { digit: d, flag };
    });

 
    const formatted = formatNumberGrouped(cleanNew);

    let mappedIndex = 0; 

    const finalDigits: DigitInfo[] = formatted.split("").map((char) => {
      if (char === ",") {
        return { digit: ",", flag: 0, isComma: true };
      }
      const item = comparison[mappedIndex];
      mappedIndex++;
      return { ...item, isComma: false };
    });

    setDigits(finalDigits);

    setHighlight(true);

    const timer = setTimeout(() => setHighlight(false), 1000);

    prevValueRef.current = cleanNew;

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className=" font-bold tracking-widest flex " dir="ltr">
      {digits.map((item, idx) => (
        <span
          key={idx}
          className={
              highlight
              ? item.flag === 1
                ? "text-green-600 transition duration-300"
                : item.flag === -1
                ? "text-red-600 transition duration-300"
                : "transition duration-300"
              : " transition duration-300"
          }
        >
          {item.digit}
        </span>
      ))}
    </div>
  );
}
