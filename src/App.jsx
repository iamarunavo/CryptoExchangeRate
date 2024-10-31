import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExchangeRate from './components/ExchangeRate.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 60000, // 60 seconds
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
}

export default App;
