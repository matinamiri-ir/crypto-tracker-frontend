export interface CoinImage {
  thumb: string;
  small: string;
  large: string;
}

export interface MarketData {
  current_price: {
    usd?: number;
    eur?: number;
    [key: string]: number | undefined;
  };
  price_change_percentage_24h?: number;
}

export interface CoinDescription {
  en?: string;
}

export interface CoinInfo {
  id: string;
  symbol: string;
  name: string;
  description: CoinDescription;
  image: CoinImage;
  market_data: MarketData;
  last_updated: string;
}
