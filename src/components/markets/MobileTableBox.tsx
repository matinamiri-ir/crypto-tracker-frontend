import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import type { RankData } from "../../pages/Markets";
import { fnum } from "../../utils/functional/formatNumber";
import {  useNavigate } from "react-router-dom";

function MobileTableBox({ coins }: { coins: RankData[] }) {
  const navigate = useNavigate();
  return (
    <TableContainer>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">نام رمزارز</TableCell>
            <TableCell align="left">قیمت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow
              key={coin.base}
              hover
              onClick={() =>
                navigate(
                  `/coin/${coin.coins[0].symbol}?baseAsset=${coin.base}&name=${coin.coins[0].enName}`
                )
              }
            >
              <TableCell align="right">
                {" "}
                <div className="flex flex-col gap-1 items-start justify-center ">
                  <img
                    src={coin.svg_icon}
                    alt={coin.base}
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{coin.faBase}</span>
                    <span className="text-sm text-subtle font-medium">
                      {coin.base}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className="flex flex-col gap-1 items-end">
                  <div className="flex items-center gap-1">
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
                    <div className="flex items-center gap-1">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MobileTableBox;
