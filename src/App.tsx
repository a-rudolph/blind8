import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Magazine from "@/components/Magazine";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen overflow-x-hidden flex flex-col w-full bg-gradient-to-b from-transparent to-primary-5 text-mono-1">
        <div className="max-w-lg flex flex-col flex-grow">
          <div className="p-4 py-6 text-xl font-bold">
            blin<span className="text-primary-1">d8</span>
          </div>
          <div className="px-4 flex-1">
            <Magazine />
          </div>
          <div className="p-4 shadow-sm">bottom nav</div>
        </div>
      </main>
      <ReactQueryDevtools toggleButtonProps={{ className: "opacity-40" }} />
    </QueryClientProvider>
  );
}

export default App;
