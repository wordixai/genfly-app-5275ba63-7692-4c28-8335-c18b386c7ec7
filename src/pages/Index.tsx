import { useQuery } from "@tanstack/react-query";
import { fetchCryptocurrencies, fetchCryptoMarketData } from "@/services/cryptoService";
import { Header } from "@/components/Header";
import { CryptoCard } from "@/components/CryptoCard";
import { CryptoTable } from "@/components/CryptoTable";
import { MarketOverview } from "@/components/MarketOverview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: cryptocurrencies, isLoading: isLoadingCryptos } = useQuery({
    queryKey: ['cryptocurrencies'],
    queryFn: fetchCryptocurrencies
  });

  const { data: marketData, isLoading: isLoadingMarket } = useQuery({
    queryKey: ['marketData'],
    queryFn: fetchCryptoMarketData
  });

  return (
    <div className="min-h-screen bg-background font-sans antialiased" dir="rtl">
      <Header />
      <main className="container py-6">
        <h1 className="text-3xl font-bold mb-6">بازار رمزارزها</h1>
        
        {isLoadingMarket ? (
          <div className="mb-8">
            <Skeleton className="h-[200px] w-full" />
          </div>
        ) : marketData ? (
          <div className="mb-8">
            <MarketOverview marketData={marketData} />
          </div>
        ) : null}

        <Tabs defaultValue="table" className="mb-8">
          <TabsList>
            <TabsTrigger value="table">جدول</TabsTrigger>
            <TabsTrigger value="cards">کارت‌ها</TabsTrigger>
          </TabsList>
          <TabsContent value="table">
            {isLoadingCryptos ? (
              <div className="space-y-2">
                <Skeleton className="h-[40px] w-full" />
                <Skeleton className="h-[40px] w-full" />
                <Skeleton className="h-[40px] w-full" />
                <Skeleton className="h-[40px] w-full" />
                <Skeleton className="h-[40px] w-full" />
              </div>
            ) : cryptocurrencies ? (
              <CryptoTable cryptocurrencies={cryptocurrencies} />
            ) : null}
          </TabsContent>
          <TabsContent value="cards">
            {isLoadingCryptos ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-[200px] w-full" />
                ))}
              </div>
            ) : cryptocurrencies ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cryptocurrencies.map((crypto) => (
                  <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            ) : null}
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
            © 2023 بازار رمزارزها. تمامی حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;