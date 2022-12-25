import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-slate-700 text-slate-300 min-h-screen flex flex-col">
      <div className="p-4 bg-slate-600 shadow-sm">Blind 8</div>
      <div className="p-4 flex-1">cards</div>
      <div className="p-4 bg-slate-500 shadow-sm">bottom nav</div>
    </main>
  );
}

export default App;
