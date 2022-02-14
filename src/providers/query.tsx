// Imports
// ========================================================
import { QueryClient, QueryClientProvider } from 'react-query';

// COnfig
// ========================================================
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

// Provider
// ========================================================
const QueryProvider: React.FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
};

// Exports
// ========================================================
export default QueryProvider;