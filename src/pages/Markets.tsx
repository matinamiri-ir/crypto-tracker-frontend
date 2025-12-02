import React, { useEffect, useMemo, useState } from "react";
import moment from "moment-jalaali";
import { Typewriter } from "react-simple-typewriter";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Pagination, Tab, Tabs } from "@mui/material";
import { useV1Market } from "../utils/custom-hook/useV1Market";

import { useSearchParams } from "react-router-dom";
import { useFilteredCoins } from "../utils/custom-hook/useFilteredCoins";
import type { OldMarket } from "../utils/types/markets";
import TableBox from "../components/markets/TableBox";
import Fuse from "fuse.js";
import MobileTableBox from "../components/markets/MobileTableBox";

type TabsName = "rank" | "profit" | "loss" | "newset";
type TabsContent = "رتبه بازار" | "سودآورترین" | "ضررده‌تربن" | "جدیدترین";
interface Tabs {
  name: TabsName;
  content: TabsContent;
}
export interface RankData {
  base: string;
  coins: OldMarket[];
  svg_icon: string;
  faBase: string;
}

function Markets() {
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  const formatDate = moment().format("jD jMMMM jYYYY");
  const { markets } = useV1Market();
  const [searchParams, setSearchParams] = useSearchParams();
  const initSearch = searchParams.get("q") || "";
  const [search, setSearch] = useState<string>(initSearch);
  const [searchedCoin, setSearchedCoin] = useState<RankData[]>([]);
  // تب‌ها
  const tabs: Tabs[] = [
    { name: "rank", content: "رتبه بازار" },
    { name: "profit", content: "سودآورترین" },
    { name: "loss", content: "ضررده‌تربن" },
    { name: "newset", content: "جدیدترین" },
  ];

  const defaultTab: TabsName = "rank";
  const otherTabs: TabsName[] = ["profit", "loss", "newset"];

  // گرفتن currentTab از query یا پیش‌فرض
  const currentTab: TabsName = (() => {
    const tabParam = searchParams.get("tabs") as TabsName | null;
    return tabParam && otherTabs.includes(tabParam) ? tabParam : defaultTab;
  })();

  // داده‌های فیلتر شده
  const { topGainers, topLoses, newCoins } = useFilteredCoins();

  // داده‌های rank
  const rankArray = Object.values(
    markets.reduce((acc, coin) => {
      if (!acc[coin.baseAsset]) {
        acc[coin.baseAsset] = {
          base: coin.baseAsset,
          coins: [],
          svg_icon: coin.baseAsset_svg_icon,
          faBase: coin.faBaseAsset,
        };
      }
      acc[coin.baseAsset].coins.push(coin);
      acc[coin.baseAsset].coins.sort((a, b) => {
        if (a.quoteAsset === "USDT") return -1;
        if (b.quoteAsset === "USDT") return 1;
        return 0;
      });
      return acc;
    }, {} as Record<string, { base: string; coins: OldMarket[]; svg_icon: string; faBase: string }>)
  );

  const tabMap = {
    loss: topLoses,
    profit: topGainers,
    newset: newCoins,
  };

  const selectedTab =
    searchedCoin && searchParams.has("q")
      ? searchedCoin
      : currentTab === "rank"
      ? rankArray
      : tabMap[currentTab];

  // صفحه فعلی
  const page = Number(searchParams.get("page")) || 1;

  // pagination
  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * 10;
    const end = start + 10;
    return selectedTab.slice(start, end);
  }, [page, selectedTab]);

  // تغییر صفحه
  const handlePageChange = (_: unknown, newPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (newPage === 1) params.delete("page");
    else params.set("page", String(newPage));
    setSearchParams(params);
  };

  const handleTabClick = (_: unknown, tabName: TabsName) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("page");

      if (tabName === defaultTab) params.delete("tabs");
      else params.set("tabs", tabName);
      params.delete("q");
      return params;
    });
  };
  const fuse = useMemo(() => {
    return new Fuse(rankArray, {
      keys: ["base", "faBase"],
      threshold: 0.8,
    });
  }, [rankArray]);
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (search.trim().length <= 0) {
      setSearch("");
      params.delete("q");
      setSearchParams(params);
    } else {
      params.set("q", search);
      setSearchParams(params);
      const curQ = searchParams.get("q");
      const res = curQ ? fuse.search(curQ).map((i) => i.item) : [];
      if (res) {
        setSearchedCoin(res);
      }
    }
  }, [search]);
  useEffect(() => {
    if (!searchParams.has("q")) {
      setSearch("");
    }
  }, [searchParams]);
  return (
    <main className="container mx-auto px-4 ">
      <div className="flex flex-col gap-8">
        <section>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                <h2 className="texxt-3xl font-bold">
                  قیمت لحظه ای ارز دیجیتال <span>ماکوین</span>
                </h2>
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-4 h-4 rounded-full bg-green-600 opacity-50 animate-blink" />
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <p className="text-subtle text-base font-light">
                    قیمت لحظه ای ارز دیجیتال( <span>{formatDate}</span> )
                  </p>
                </div>
              </div>
              <p className="text-subtle font-extralight text-lg h-27">
                <Typewriter
                  words={[
                    "قیمت لحظه‌ای ارزهای دیجیتال را به همراه درصد تغییرات قیمتی‌ ۲۴ ساعته آن‌ها مشاهده کنید. نرخ جهانی محبوب‌ترین رمزارزهای بازار ارزهای دیجیتال را در ماکوین رصد کنید و از فرصت کسب سود بهره‌مند شوید.",
                  ]}
                  loop
                  cursor
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </p>
            </div>
            <div className="lg:p-8 p-4 rounded-2xl bg-secondary">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between  items-center">
                    <Box
                      sx={{
                        order: {
                          xs: "2",
                          lg: "1",
                        },
                      }}
                    >
                      <Tabs
                        value={currentTab}
                        onChange={handleTabClick}
                        aria-label="wrapped label tabs example"
                        sx={(theme) => ({
                          "& .MuiTabs-indicator": {
                            height: "0.15rem",
                            borderRadius: "1rem",
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "limegreen"
                                : "green", // خط سبز در دارک و لایت
                          },
                          "& .MuiTab-root.Mui-selected": {
                            color:
                              theme.palette.mode === "dark"
                                ? "limegreen"
                                : "green", // متن تب فعال
                          },
                          "& .MuiTab-root": {
                            color:
                              theme.palette.mode === "dark"
                                ? "gray"
                                : "gray.700", // متن تب غیر فعال
                          },
                        })}
                      >
                        {tabs.map((tab) => (
                          <Tab
                            value={tab.name}
                            label={tab.content}
                            key={tab.name}
                            sx={{
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          />
                        ))}
                      </Tabs>
                    </Box>{" "}
                    <div
                      tabIndex={0}
                      className="relative bg-gray-100 dark:bg-gray-800 p-3 rounded-xl flex items-center gap-3 !order-1 lg:order-2 w-full lg:w-auto"
                    >
                      <input
                        type="text"
                        className="w-full border-none outline-none "
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        placeholder={`جستجو در ${markets.length} رمزارز`}
                      />
                      <SearchIcon className="text-subtle  " fontSize="large" />
                    </div>
                  </div>
                  {selectedTab.length > 0 ? (
                    <div className="flex flex-col gap-6">
                      <div className="hidden  lg:flex">
                        <TableBox coins={paginatedData} />
                      </div>
                      <div className="flex lg:hidden">
                        <MobileTableBox coins={paginatedData} />
                      </div>
                      <div className="flex items-center justify-between ">
                        <p>
                          صفحه {page} از {Math.ceil(selectedTab.length / 10)}
                        </p>
                        <Pagination
                          count={Math.ceil(selectedTab.length / 10)}
                          page={page}
                          onChange={handlePageChange}
                          shape="rounded"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-center">متاسفانه هیچ ارزی پیدا نشد:)</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Markets;
