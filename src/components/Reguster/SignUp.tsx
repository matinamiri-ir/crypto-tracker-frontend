import React, { useState, type FormEvent } from "react";
import { useTheme } from "../../utils/Context/ThemeProvider";
import AgreementList from "./CheckBox";
import { Link } from "react-router-dom";
import FormLayout from "./formLayout";

interface Agreements {
  terms: boolean;
  privacy: boolean;
}

function SignUp() {
  const [agreements, setAgreements] = useState<Agreements>({
    terms: true,
    privacy: true,
  });
  const { theme } = useTheme();
  const isDark = theme === "dark";
  function formAction(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <FormLayout>
      <h1 className="!font-[Irancell1] text-2xl font-bold ">
        ایجاد حساب کاربری
      </h1>
      <form onSubmit={formAction} className="flex flex-col gap-4">
        <div className="relative border border-gray-600 p-3 rounded-md z-10">
          <input
            type="text"
            placeholder="ایمیل / شماره تلفن
"
            name="emailOrPhone"
            id="emailOrPhone"
            className="outline-none border-none bg-[unset] z-10"
          />
          <label
            htmlFor="emailOrPhone"
            className="absolute -top-4 right-2  bg-white dark:bg-[#222223] p-1 rounded-sm text-[13px]"
          >
            ایمیل / شماره تلفن
          </label>
        </div>
        <AgreementList agreements={agreements} setAgreements={setAgreements} />
        <button
          className={`${
            agreements.privacy && agreements.terms
              ? "dark:bg-green-800 bg-zinc-800 "
              : "dark:bg-[#01bc8d] bg-zinc-400"
          } dark:bg-[#01bc8d] bg-zinc-400  text-white w-full  py-3 rounded-xl shadow-lg text-xl font-medium`}
        >
          ثبت نام
        </button>
      </form>
      <div className="grid grid-cols-3 items-center gap-3">
        <div className=" h-[1px] bg-gray-200 dark:bg-gray-700"></div>
        <p className="text-sm lg:text-base font-light text-center">
          همچنین ادامه بدید{" "}
        </p>
        <div className=" h-[1px] bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-3 gap-2 lg:ga-4 xl:gap-6">
        <div className=" rounded-full shadow-sm border border-gray-300">
          <div className="flex items-center justify-center gap-2 xl:gap-3 py-1 lg:py-3">
            <span className="text-base  font-medium text-center ">Apple</span>
            <img
              src={
                isDark
                  ? "https://assets.staticimg.com/g-biz/externals/2022-06-01/809a523014f5ccf5.svg"
                  : "https://assets.staticimg.com/g-biz/externals/2022-06-01/e386f36bcb9df7af.svg"
              }
              alt="Apple-icon"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
        <div className="  rounded-full shadow-sm border border-gray-300">
          <div className="flex items-center justify-center  gap-1 xl:gap-3 py-1 lg:py-3">
            <span className="text-base  font-medium text-center ">Google</span>
            <img
              src="https://assets.staticimg.com/g-biz/externals/2022-06-01/dedfe0e901fb83a6.svg"
              alt="Apple-icon"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>

        <div className="rounded-full shadow-sm border border-gray-300">
          <div className="flex items-center justify-center  gap-2 xl:gap-3 py-1  lg:py-3">
            <span className="text-base  font-medium">Telegram</span>
            <img
              src="https://assets.staticimg.com/g-biz/externals/2022-06-01/4104a098d1e6ac32.svg"
              alt="Apple-icon"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-subtle">آیا حساب کاربری دارید؟</p>
        <Link to="/register/signin" className="font-medium underline">
          ورود
        </Link>
      </div>
    </FormLayout>
  );
}

export default SignUp;
