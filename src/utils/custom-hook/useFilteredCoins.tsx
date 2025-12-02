import { useMemo } from "react";
import { useV1Market } from "./useV1Market";
import type { OldMarket } from "../types/markets";

export function useFilteredCoins() {
  const { markets } = useV1Market();

  const topGainers = useMemo(() => {
    return Object.values(
      markets
        .filter((c) => typeof c.stats?.["24h_ch"] === "number")
        .sort(
          (a, b) =>
            (b.stats!["24h_ch"] as number) - (a.stats!["24h_ch"] as number)
        )
        .reduce((acc, coin) => {
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
            if (a.quoteAsset === "USDT") return -1; // بیاد جلوتر
            if (b.quoteAsset === "USDT") return 1; // بره عقب‌تر
            return 0;
          });
          return acc;
        }, {} as Record<string, { base: string; coins: OldMarket[]; svg_icon: string; faBase: string }>)
    );
  }, [markets]);
  const topLoses = useMemo(() => {
    return Object.values(
      markets
        .filter((c) => typeof c.stats?.["24h_ch"] === "number")
        .sort(
          (a, b) =>
            (a.stats!["24h_ch"] as number) - (b.stats!["24h_ch"] as number)
        )
        .reduce((acc, coin) => {
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
            if (a.quoteAsset === "USDT") return -1; // بیاد جلوتر
            if (b.quoteAsset === "USDT") return 1; // بره عقب‌تر
            return 0;
          });
          return acc;
        }, {} as Record<string, { base: string; coins: OldMarket[]; svg_icon: string; faBase: string }>)
    );
  }, [markets]);

  const trending = useMemo(() => {
    const trendCoin = Object.values(
      markets
        .filter((c) => typeof c.stats?.["24h_ch"] === "number")
        .sort((a, b) => {
          const volA = Number(a.stats?.["24h_quoteVolume"] ?? 0);
          const volB = Number(b.stats?.["24h_quoteVolume"] ?? 0);
          return volB - volA;
        })
        .reduce((acc, coin) => {
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
            if (a.quoteAsset === "USDT") return -1; // بیاد جلوتر
            if (b.quoteAsset === "USDT") return 1; // بره عقب‌تر
            return 0;
          });
          return acc;
        }, {} as Record<string, { base: string; coins: OldMarket[]; svg_icon: string; faBase: string }>)
    );

    return trendCoin;
  }, [markets]);

  const newCoins = useMemo(() => {
    return Object.values(
      markets
        .filter((c) => c.createdAt)
        .sort(
          (a, b) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
        )
        .reduce((acc, coin) => {
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
            if (a.quoteAsset === "USDT") return -1; // بیاد جلوتر
            if (b.quoteAsset === "USDT") return 1; // بره عقب‌تر
            return 0;
          });
          return acc;
        }, {} as Record<string, { base: string; coins: OldMarket[]; svg_icon: string; faBase: string }>)
    );
  }, [markets]);

  return { topGainers, newCoins, trending, topLoses };
}
