import axios, { isAxiosError } from "axios";
import React, { useId, type SetStateAction } from "react";
import toast from "react-hot-toast";
interface CoinStatus {
  like: boolean;
  bookmark: boolean;
}
// Toggle like coin
export const toggleLikeCoin = async (
  coin: string,
  userId: string,
  like: boolean,
  setCoinStatus: React.Dispatch<SetStateAction<CoinStatus>>
) => {
  setCoinStatus((p: CoinStatus) => ({ ...p, like: !like }));
  try {
    const res = await axios.post(
      "https://crypto-tracker-backend-xt56.onrender.com/api/users/coin/like",
      {
        coin,
        userId,
      },
      {
        withCredentials: true,
      }
    );
    toast.success(res.data.message);
    return res.data.likedCoins;
  } catch (err) {
    if (isAxiosError(err))
    {  console.log(err.response?.data)
      toast.error(err.response?.data?.error || "خطا در لایک کردن کوین");}
    return null;
  }
};

// Toggle bookmark coin
export const toggleBookmarkCoin = async (
  coin: string,
  userId: string,
  bookmark: boolean,
  setCoinStatus: React.Dispatch<SetStateAction<CoinStatus>>
) => {
  setCoinStatus((p: CoinStatus) => ({ ...p, bookmark: !bookmark }));

  console.log(useId);
  try {
    const res = await axios.post(
      "https://crypto-tracker-backend-xt56.onrender.com/api/users/coin/bookmark",
      {
        coin,
        userId,
      },
      {
        withCredentials: true,
      }
    );
    toast.success(res.data.message);
    return res.data.bookmark;
  } catch (err) {
    if (isAxiosError(err))
      toast.error(err.response?.data?.error || "خطا در بوکمارک کردن کوین");
    return null;
  }
};
