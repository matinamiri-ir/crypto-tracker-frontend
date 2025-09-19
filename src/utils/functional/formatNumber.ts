export function fnum(num:string | number | undefined):string{
  if (num == null) return "-";
  return Number(num).toLocaleString("fa-IR" , {
    minimumFractionDigits:0,
    maximumFractionDigits:10
  });
}