import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsListPage from "./pages/products/ui/ProductsListPage";

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
      <main className="p-2 md:p-4">
        <ProductsListPage />
      </main>
    </QueryClientProvider>
  );
}

export default App;
