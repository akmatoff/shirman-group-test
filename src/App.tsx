import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsListPage from "./pages/products/ui/ProductsListPage";
import { Toaster } from "./shared/components/ui/sonner";
import Header from "./widgets/header/ui/Header";
import { TooltipProvider } from "./shared/components/ui/tooltip";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 25 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={200}>
        <Toaster />
        <Header />
        <main className="flex flex-col items-center min-h-screen w-full p-2 md:p-4">
          <ProductsListPage />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
