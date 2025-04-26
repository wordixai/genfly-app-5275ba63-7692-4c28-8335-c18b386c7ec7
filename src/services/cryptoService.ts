import { Cryptocurrency, CryptoMarketData } from "@/types/crypto";

// Mock data for cryptocurrencies
const mockCryptocurrencies: Cryptocurrency[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "btc",
    current_price: 65432.12,
    market_cap: 1278000000000,
    market_cap_rank: 1,
    price_change_percentage_24h: 2.45,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    high_24h: 66000.00,
    low_24h: 64000.00,
    total_volume: 32500000000
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "eth",
    current_price: 3456.78,
    market_cap: 415000000000,
    market_cap_rank: 2,
    price_change_percentage_24h: 1.23,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    high_24h: 3500.00,
    low_24h: 3400.00,
    total_volume: 18700000000
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "usdt",
    current_price: 1.00,
    market_cap: 95000000000,
    market_cap_rank: 3,
    price_change_percentage_24h: 0.01,
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    high_24h: 1.01,
    low_24h: 0.99,
    total_volume: 65000000000
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "bnb",
    current_price: 567.89,
    market_cap: 87000000000,
    market_cap_rank: 4,
    price_change_percentage_24h: -0.75,
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    high_24h: 575.00,
    low_24h: 560.00,
    total_volume: 2100000000
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "sol",
    current_price: 145.67,
    market_cap: 63000000000,
    market_cap_rank: 5,
    price_change_percentage_24h: 3.21,
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    high_24h: 148.00,
    low_24h: 140.00,
    total_volume: 3800000000
  }
];

// Mock market data
const mockMarketData: CryptoMarketData = {
  total_market_cap: 2450000000000,
  total_volume: 125000000000,
  market_cap_percentage: {
    btc: 52.16,
    eth: 16.94,
    usdt: 3.88,
    bnb: 3.55,
    sol: 2.57
  },
  market_cap_change_percentage_24h_usd: 1.87
};

export const fetchCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  // In a real app, this would be an API call
  // return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
  //   .then(response => response.json());
  
  // Using mock data instead
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCryptocurrencies);
    }, 500);
  });
};

export const fetchCryptoMarketData = async (): Promise<CryptoMarketData> => {
  // In a real app, this would be an API call
  // return fetch('https://api.coingecko.com/api/v3/global')
  //   .then(response => response.json())
  //   .then(data => data.data);
  
  // Using mock data instead
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMarketData);
    }, 500);
  });
};

export const fetchCryptocurrencyById = async (id: string): Promise<Cryptocurrency | undefined> => {
  // In a real app, this would be an API call
  // return fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  //   .then(response => response.json());
  
  // Using mock data instead
  return new Promise((resolve) => {
    setTimeout(() => {
      const crypto = mockCryptocurrencies.find(crypto => crypto.id === id);
      resolve(crypto);
    }, 300);
  });
};