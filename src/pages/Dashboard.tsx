import { useNavigate } from "react-router-dom";
import { useUser } from "../utils/Context/UserProvider";
import React, { useEffect } from "react";

export default function Dashboard() {
  const { user, loading, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/register/signin");
    }
  }, [user, loading, navigate]);

  if (loading) return <p>در حال بارگذاری...</p>;

  return (
    <div>
      <h1>سلام {user?.username}</h1>
      <button onClick={logout}>خروج</button>
    </div>
  );
}
