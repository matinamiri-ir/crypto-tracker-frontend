import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function Exchange() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="container mx-auto">
      <div className="p-4 lg:p-8 rounded-2xl bg-secondary w-full lg:w-[calc(50%)] mx-auto ">
        <div className="flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Exchange;
