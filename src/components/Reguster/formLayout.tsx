import React, { type ReactNode } from "react";

function FormLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" md:bg-white dark:bg-[#222223] p-10 rounded-xl w-full  lg:w-[80%] mx-auto lg:mt-10   ">
      <div className="flex flex-col gap-8 justify-center ">{children}</div>
    </div>
  );
}

export default FormLayout;
