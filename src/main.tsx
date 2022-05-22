import { render } from 'preact';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';

import '@/index.css';

const element = document.getElementById('app');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, suspense: true },
    mutations: { retry: 0 },
  },
});

if (element) {
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>,
    element,
  );
}
