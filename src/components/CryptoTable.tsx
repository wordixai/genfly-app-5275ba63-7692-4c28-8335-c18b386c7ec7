import { Cryptocurrency } from "@/types/crypto";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface CryptoTableProps {
  cryptocurrencies: Cryptocurrency[];
}

export function CryptoTable({ cryptocurrencies }: CryptoTableProps) {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h %</TableHead>
          <TableHead className="hidden md:table-cell">Market Cap</TableHead>
          <TableHead className="hidden md:table-cell">Volume (24h)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cryptocurrencies.map((crypto) => (
          <TableRow key={crypto.id}>
            <TableCell>{crypto.market_cap_rank}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <img 
                  src={crypto.image} 
                  alt={crypto.name} 
                  className="w-6 h-6 mr-2 rounded-full"
                />
                <span className="font-medium">{crypto.name}</span>
                <span className="ml-2 text-xs text-muted-foreground uppercase">{crypto.symbol}</span>
              </div>
            </TableCell>
            <TableCell>{formatCurrency(crypto.current_price)}</TableCell>
            <TableCell>
              <Badge variant={crypto.price_change_percentage_24h > 0 ? "success" : "danger"} className="flex items-center w-fit">
                {crypto.price_change_percentage_24h > 0 ? (
                  <ArrowUpIcon className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3 mr-1" />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{formatLargeNumber(crypto.market_cap)}</TableCell>
            <TableCell className="hidden md:table-cell">{formatLargeNumber(crypto.total_volume)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}