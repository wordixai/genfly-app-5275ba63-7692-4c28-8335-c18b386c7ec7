import { Cryptocurrency } from "@/types/crypto";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface CryptoCardProps {
  crypto: Cryptocurrency;
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const priceChangeIsPositive = crypto.price_change_percentage_24h > 0;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  const formatLargeNumber = (value: number) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return formatCurrency(value);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <img 
            src={crypto.image} 
            alt={crypto.name} 
            className="w-8 h-8 rounded-full"
          />
          <CardTitle className="text-xl">{crypto.name}</CardTitle>
          <span className="text-sm text-muted-foreground uppercase">{crypto.symbol}</span>
        </div>
        <Badge variant={priceChangeIsPositive ? "success" : "danger"} className="flex items-center">
          {priceChangeIsPositive ? <ArrowUpIcon className="w-3 h-3 mr-1" /> : <ArrowDownIcon className="w-3 h-3 mr-1" />}
          {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-xl font-bold">{formatCurrency(crypto.current_price)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="text-lg font-medium">{formatLargeNumber(crypto.market_cap)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">24h High</p>
            <p className="text-green-600">{formatCurrency(crypto.high_24h)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">24h Low</p>
            <p className="text-red-600">{formatCurrency(crypto.low_24h)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}