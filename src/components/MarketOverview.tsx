import { CryptoMarketData } from "@/types/crypto";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MarketOverviewProps {
  marketData: CryptoMarketData;
}

export function MarketOverview({ marketData }: MarketOverviewProps) {
  const formatLargeNumber = (value: number) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  };

  const marketChangeIsPositive = marketData.market_cap_change_percentage_24h_usd > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">بازار رمزارزها</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">ارزش کل بازار</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold">{formatLargeNumber(marketData.total_market_cap)}</p>
              <Badge variant={marketChangeIsPositive ? "success" : "danger"} className="ml-2 flex items-center">
                {marketChangeIsPositive ? <ArrowUpIcon className="w-3 h-3 mr-1" /> : <ArrowDownIcon className="w-3 h-3 mr-1" />}
                {Math.abs(marketData.market_cap_change_percentage_24h_usd).toFixed(2)}%
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">حجم معاملات 24 ساعته</p>
            <p className="text-2xl font-bold">{formatLargeNumber(marketData.total_volume)}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-muted-foreground mb-2">سهم بازار</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {Object.entries(marketData.market_cap_percentage).map(([symbol, percentage]) => (
              <div key={symbol} className="bg-muted rounded-md p-2 text-center">
                <p className="uppercase font-medium">{symbol}</p>
                <p className="text-sm">{percentage.toFixed(2)}%</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}