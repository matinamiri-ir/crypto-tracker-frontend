import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

import type { RankData } from "../../pages/Markets";
import MiniChart from "./MiniChart";
import { fnum } from "../../utils/functional/formatNumber";
import { Link } from "react-router-dom";

function TableBox({ coins }: { coins: RankData[] }) {
  return (
    <TableContainer>
      <Table sx={{ width: "100" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right"> رمزارز</TableCell>
            <TableCell align="right">قیمت</TableCell>
            <TableCell align="right">حجم معامله</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.base}>
              <TableCell align="right">
                {" "}
                <div className="flex flex-col gap-2 items-start justify-center ">
                  <img
                    src={coin.svg_icon}
                    alt={coin.base}
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{coin.faBase}</span>
                    <span className="text-sm text-subtle font-medium">
                      {coin.base}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`${
                        coin.coins[0].stats["24h_ch"] > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {Math.abs(coin.coins[0].stats["24h_ch"])}
                    </span>
                    <span>{fnum(coin.coins[0].stats.askPrice)}</span>
                    <span className="text-subtle">تومان </span>
                  </div>
                  {coin.coins[1] && (
                    <div className="flex items-center gap-2">
                      <span
                        className={`${
                          coin.coins[1].stats["24h_ch"] > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Math.abs(coin.coins[1].stats["24h_ch"])}
                      </span>
                      <span>
                        {fnum(coin.coins[1].stats.askPrice)}{" "}
                        <span className="text-subtle">تتر</span>
                      </span>
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell align="right">
                <div className="flex flex-col gap-2">
                  <p>
                    {" "}
                    {fnum(coin.coins[0].stats["24h_volume"])}{" "}
                    <span className="text-subtle">تومان</span>
                  </p>
                  {coin.coins[1] && (
                    <p>
                      {" "}
                      {fnum(coin.coins[1]?.stats["24h_volume"])}{" "}
                      <span className="text-subtle">دلار</span>
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell align="center">
                <MiniChart symbol={coin.coins[0].symbol} />
              </TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  sx={{ borderRadius: "1rem" }}
                  color="success"
                >
                  <Link
                    to={`/coin/${coin.coins[0].symbol}?baseAsset=${coin.base}&name=${coin.coins[0].enName}`}
                  >
                    قیمت {coin.faBase}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableBox;
