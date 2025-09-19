import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function LabelBottomNavigation() {
  const [value, setValue] = useState<string>("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="container mx-auto fixed bottom-0 right-0  md:hidden z-50 bg-white">
      <BottomNavigation
        sx={{ width: "100%", height: "70px" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="خانه"
          value="home"
          icon={
            <img
              src={"/images/bottomBar/svgexport-7.svg"}
              alt={value}
              className="w-8 h-8 object-cover"
            />
          }
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Irancell1",
              fontSize: "13px",
              fontWeight: 500,
              color: "gray",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              fontSize: "14px",

              color: "black",
            },
          }}
        />
        <BottomNavigationAction
          label="معامله"
          value="trade"
          icon={
            <img
              src={"/images/bottomBar/svgexport-8.svg"}
              alt={value}
              className="w-8 h-8 object-cover"
            />
          }
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Irancell1",
              fontSize: "13px",
              fontWeight: 500,
              color: "gray",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              fontSize: "14px",

              color: "black",
            },
          }}
        />
        <BottomNavigationAction
          label="خرید آنی"
          value="buynow"
          icon={
            <img
              src={"/images/bottomBar/svgexport-9.svg"}
              alt={value}
              className="w-8 h-8 object-cover"
            />
          }
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Irancell1",
              fontSize: "13px",
              fontWeight: 500,
              color: "gray",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              fontSize: "14px",

              color: "black",
            },
          }}
        />
        <BottomNavigationAction
          label="کیف پول"
          value="wallet"
          icon={
            <img
              src={"/images/bottomBar/svgexport-10.svg"}
              alt={value}
              className="w-8 h-8 object-cover"
            />
          }
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Irancell1",
              fontSize: "13px",
              fontWeight: 500,
              color: "gray",
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              fontSize: "14px",

              color: "black",
            },

          }}
        />
      </BottomNavigation>
    </div>
  );
}
