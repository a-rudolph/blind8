import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { PageProvider, Router } from "@/utils/router";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PageProvider>
        <main className="min-h-screen overflow-x-hidden flex flex-col w-full bg-gradient-to-b from-transparent to-primary-5 text-mono-1">
          <Header />
          <div className="max-w-lg flex flex-col flex-grow">
            <Router />
          </div>
          <BottomNav />
        </main>
        <ReactQueryDevtools toggleButtonProps={{ className: "opacity-40" }} />
      </PageProvider>
    </QueryClientProvider>
  );
}

export default App;
