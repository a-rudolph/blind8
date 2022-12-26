import ProfileCard from "./ProfileCard";

function App() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-gradient-to-b from-transparent to-fuchsia-100 text-slate-800">
      <div className="max-w-lg flex flex-col flex-grow">
        <div className="p-4 py-6 text-xl font-bold">Blind 8</div>
        <div className="px-4 flex-1">
          <div className="flex flex-col justify-center items-center h-full">
            <ProfileCard />
            <div className="flex gap-6 m-4">
              <button className="btn text-xl h-16 w-16 border border-slate-200/50">
                ✖️
              </button>
              <button className="btn btn-primary text-xl h-16 w-16">🤍</button>
            </div>
          </div>
        </div>
        <div className="p-4 shadow-sm">bottom nav</div>
      </div>
    </main>
  );
}

export default App;
