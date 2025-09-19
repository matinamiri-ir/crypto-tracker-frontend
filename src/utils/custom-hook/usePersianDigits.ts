import { useCallback } from 'react';


export default function usePersianDigits() {
  const convert = useCallback((input: string | number): string => {
    const str = input.toString();
    return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
  }, []);

  return convert;
}
