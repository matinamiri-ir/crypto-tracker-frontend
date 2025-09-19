import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import DarkMode from "../components/DarkMode";
import Qrcode from "../components/NavBar/Qrcode";
import { useTheme } from "../utils/Context/ThemeProvider";
function Register() {
  const location = useLocation();
  const isSignUp = location.pathname.includes("signup");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="h-[100%]">
      <header>
        <nav className="fixed top-0   w-full px-4 py-3 bg-secondary shadow-lg z-[100] h-[70px]">
          <ul className="flex items-center justify-between">
            <li>
              <Logo />
            </li>
            <li className="flex items-center gap-6">
              <Qrcode />
              <DarkMode />
            </li>
          </ul>
        </nav>
      </header>
      <main className=" container mx-auto   h-screen flex items-center justify-center">
        <section className="lg:grid grid-cols-2 justify-center items-center   gap-6">
          <div className="hidden lg:flex flex-col items-center justify-center ">
            {isSignUp && (
              <div className="border-b border-gray-200 dark:border-gray-700 py-4">
                <h2 className="text-xl lg:text-2xl font-bold text-nowrap">
                  همین الان به کاربران ماکوین بپیوندید!{" "}
                </h2>
                <div className="flex items-center gap-4">
                  <p
                    className="text-base font-medium
                "
                  >
                    ثبت‌نام کن و ۱۰۰ USDT توکن + ۴۰۰ USDT کوپن + ۱۰,۵۰۰ USDT
                    اعتبار آزمایشی فیوچرز هدیه بگیر !!!
                  </p>
                  <img
                    src={
                      isDark
                        ? "https://assets.staticimg.com/ucenter-web/1.4.50/svg/reg_left_banner_1_dark.ca4ac84a.svg"
                        : "https://assets.staticimg.com/ucenter-web/1.4.50/media/a2b745a9929ea00283ba.png"
                    }
                    alt=""
                    className="w-[148px]"
                  />
                </div>
              </div>
            )}
            {!isSignUp && (
              <div className="w-full border-b border-gray-200 dark:border-gray-700 py-6 flex flex-col gap-6">
                <h3 className="text-xl lg:text-2xl font-bold text-nowrap">
                  انتخاب حرفه‌ای‌ها، بهترین کیفیت
                </h3>
                <div className="grid grid-cols-3 items-center gap-3 w-full">
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-base font-normal  ">بیش از</p>

                    <span className="text-xl font-black">{"۲۰۰"} </span>
                    <p className="text-base font-normal text-green-600 ">
                      کشور و منطقه
                    </p>
                  </div>
                  {/* <div className="w-[.5px] h-10 rounded-md bg-gray-600"></div> */}
                  <div className="flex flex-col gap-2 items-center border-l border-r  border-gray-700">
                    <p className="text-base font-normal  ">بیش از</p>

                    <span className="text-xl font-black">{"۱,۳۰۰"} </span>
                    <p className="text-base font-normal text-green-600 ">
                      جفت ارز برای معامله
                    </p>
                  </div>
                  {/* <div className="w-[.5px] h-10 rounded-md bg-gray-600"></div> */}

                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-base font-normal  ">بیش از</p>

                    <span className="text-xl font-black">{"۲۰۰"} </span>
                    <p className="text-base font-normal text-green-600 ">
                      عرضه پروژه‌
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full flex flex-col gap-5 items-start justify-center border-b border-gray-200 dark:border-gray-700 py-6">
              <div className="flex flex-col   items-start  gap-2">
                <h3 className="text-xl lg:text-2xl font-bold text-nowrap">
                  ذخایر ما ۱:۱ پشتوانه واقعی دارند!
                </h3>
                <p className="text-base text-subtle font-medium">
                  هر واحد، دقیقاً با دارایی واقعی پشتیبانی می‌شود؛ شفاف، مطمئن و
                  امن!
                </p>
              </div>
              <div className="grid grid-cols-3 itesm-center gap-8 self-center ">
                <div className="p-4 border border-gray-700 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={
                        isDark
                          ? "https://assets.staticimg.com/ucenter-web/1.4.50/svg/reg_left_btc_dark.618e9170.svg"
                          : "data:image/png;base64,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"
                      }
                      alt="bitcoin-icon"
                      loading="lazy"
                      draggable="false"
                      className="w-[48px]"
                    />
                    <span className="text-xl font-bold"> ۱۰۶٪ +</span>
                    <p className="text-sm text-subtle">نسبت ذخیره بیت‌کوین</p>
                  </div>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={
                        isDark
                          ? "https://assets.staticimg.com/ucenter-web/1.4.50/svg/reg_left_eth_dark.de59d8ca.svg"
                          : "data:image/png;base64,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"
                      }
                      alt="eth-icon"
                      loading="lazy"
                      draggable="false"
                      className="w-[48px]"
                    />
                    <span className="text-xl font-bold"> ۱۰۶٪ +</span>
                    <p>نسبت ذخیره اتریوم</p>
                  </div>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={
                        isDark
                          ? "https://assets.staticimg.com/ucenter-web/1.4.50/svg/reg_left_usdt_dark.bb9d66bc.svg"
                          : "data:image/png;base64,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"
                      }
                      alt="usdt-icon"
                      loading="lazy"
                      draggable="false"
                      className="w-[48px]"
                    />
                    <span className="text-xl font-bold"> ۱۲۱٪ +</span>
                    <p>نسبت ذخیره تتر </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Register;
