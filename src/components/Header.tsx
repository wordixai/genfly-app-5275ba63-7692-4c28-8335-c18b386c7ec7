import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="hidden font-bold sm:inline-block">
              بازار رمزارزها
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
              خانه
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
              رمزارزها
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
              اخبار
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
              درباره ما
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <span className="hidden lg:inline-flex">جستجوی رمزارز...</span>
              <span className="inline-flex lg:hidden">جستجو...</span>
              <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </div>
          <Button variant="default">ورود</Button>
        </div>
      </div>
    </header>
  );
}