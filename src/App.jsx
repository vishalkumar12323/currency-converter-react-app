import { useState } from "react";
import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app p-2 text-white text-2xl">
        <h1 className="text-3xl font-semibold">Online Currency Converter</h1>
        <Inputs />
        <Dropdown />
        <Result />
        <button className="w-full py-3 mt-4 rounded-sm bg-blue-500">
          Get Exchange Rate
        </button>
      </div>
    </>
  );
}

export default App;
