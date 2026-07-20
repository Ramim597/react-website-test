import "./App.css";

function App() {
  return (
    <>
      {/* Background gradient */}
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      {/* Header */}
      <header className="flex items-center justify-between mt-3">
        <div></div>
        <div className="flex gap-3">
          <img
            src="/src/assets/github.png"
            alt="github-img"
            className="size-[24px] rounded-3xl cursor-pointer"
          />
          <img
            src="/src/assets/twitter.jpg"
            alt="twitter-img"
            className="size-[24px] rounded-3xl mr-3 cursor-pointer"
          />
        </div>
      </header>
      {/* Main content */}
      <div className="main flex items-center justify-center flex-col h-[80vh]">
        <div className="flex cursor-pointer border rounded-2xl p-1 border-t-2 text-[10px] mb-4">
          <p className="text-gray-600">New Snippets⚡</p>
          <p className="bold">Read more → </p>
        </div>
        <h2 className="text-6xl font-medium">
          Collection of modern, <br /> background snippets
        </h2>
        <p className="text-xl mt-10 text-gray-500">
          Ready-to-use, simply copy and paste into your next project. All
          snippets <br /> crafted with Tailwind CSS and Vanilla CSS for easy
          integration.
        </p>
        <div className="mt-8">
          <button className="bg-slate-900 cursor-pointer text-white p-2.5 rounded">
            Go to Github →
          </button>
          <button className="bg-gray-200 cursor-pointer ml-4 text-slate-900 p-2.5 rounded font-medium">
            Reset background
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
