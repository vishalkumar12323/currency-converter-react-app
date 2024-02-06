import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";

function App() {
  return (
    <>
      <div className="app p-2 text-white text-2xl min-w-[50vw] mx-auto">
        <h1 className="text-3xl font-semibold uppercase">Currency Converter</h1>
        <Inputs />
        <Dropdown />
        <Result />
        <button className="w-full py-3 mt-4 rounded-sm bg-blue-500 hover:bg-blue-600 transition-colors">
          Get Exchange Rate
        </button>
      </div>
    </>
  );
}

export default App;
