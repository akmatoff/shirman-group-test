import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsListPage from "./pages/products/ui/ProductsListPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsListPage />
    </QueryClientProvider>
  );
}

export default App;
