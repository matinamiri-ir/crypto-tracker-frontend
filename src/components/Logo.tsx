import { Link } from "react-router-dom";
import React from "react";
export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Link
        to="/"
        className="!font-[Irancell1] py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 font-bold text-3xl xl:text-4xl"
      >
        ماکوین
      </Link>
    </div>
  );
}
