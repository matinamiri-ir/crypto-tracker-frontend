import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";

export interface Comment {
  _id: string;
  userId: string;
  username: string;
  text: string;
  likes: number;
  dislikes: number;
  rating: number;
  createdAt: string;
}

// ================= GET کامنت‌ها =================
export const getComments = async (
  symbol: string,
  page = 1,
  limit = 10,
  sort: "newest" | "oldest" = "newest"
): Promise<Comment[]> => {
  try {
    const res = await axios.get(
      "https://crypto-tracker-backend-xt56.onrender.com/api/comments",
      {
        params: { symbol, page, limit, sort },
      }
    );

    return res.data?.data || [];
  } catch (err) {
    let message = "خطای ناشناخته";
    
    if (isAxiosError(err)) {
      message =
        (err.response?.data?.error as string) ||
        (err.response?.data?.message as string) ||
        "خطا در گرفتن کامنت‌ها";
    }

    toast.error(message, {
      duration: 5000,
      style: { background: "red", color: "white" },
    });

    console.error("Get comments error:", err);
 throw new Error(message)
 
  }
};


// ================= POST کامنت جدید =================
export const addComment = async (
  symbol: string,
  userId: string,
  username: string,
  text: string
): Promise<Comment | null> => {
  try {
    const res = await axios.post(
      "https://crypto-tracker-backend-xt56.onrender.com/api/comments",
      {
        symbol,
        userId,
        username,
        text,
      }
    );

    toast.success("نظر  با موفقیت اضافه شد!", {
      duration: 5000, // ۵ ثانیه
      style: { background: "green", color: "white" },
    });

    return res.data;
  } catch (err) {
    if (isAxiosError(err)) {
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "خطای ناشناخته";
      console.log(err);
      toast.error(message, {
        duration: 2000, // 2 ثانیه
        style: { background: "red", color: "white" },
      });

      console.error("Add comment error:", err);
    }
    return null;
  }
};
// ================= لایک کامنت =================
export const likeComment = async (
  commentId: string,
  userId: string
): Promise<{ likes: number; dislikes: number; rating: number } | null> => {
  try {
    const res = await axios.post(
      `https://crypto-tracker-backend-xt56.onrender.com/api/comments/${commentId}/like`,
      { userId }
    );
    return res.data;
  } catch (error) {
    console.error("Error liking comment:", error);
    if (isAxiosError(error))
      toast.error(error?.response?.data?.message || "خطا در لایک کامنت!");
    return null;
  }
};

// ================= دیسلایک کامنت =================
export const dislikeComment = async (
  commentId: string,
  userId: string
): Promise<{ likes: number; dislikes: number; rating: number } | null> => {
  try {
    const res = await axios.post(
      `https://crypto-tracker-backend-xt56.onrender.com/api/comments/${commentId}/dislike`,
      { userId }
    );
    return res.data;
  } catch (error) {
    console.error("Error disliking comment:", error);
    if (isAxiosError(error))
      toast.error(error?.response?.data?.message || "خطا در دیسلایک کامنت!");
    return null;
  }
};

// ================= حذف کامنت =================
export const deleteComment = async (
  commentId: string
): Promise<{ ok: boolean }> => {
  const res = await axios.delete(
    `https://crypto-tracker-backend-xt56.onrender.com/api/comments/${commentId}`
  );
  return res.data;
};
