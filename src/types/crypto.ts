export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  image: string;
  high_24h: number;
  low_24h: number;
  total_volume: number;
}

export interface CryptoMarketData {
  total_market_cap: number;
  total_volume: number;
  market_cap_percentage: {
    [key: string]: number;
  };
  market_cap_change_percentage_24h_usd: number;
}