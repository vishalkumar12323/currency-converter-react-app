import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";
import { useEffect, useState } from "react";
import { getExchangeRate } from "./Services";
import { countries, fromIndex, toIndex } from "./Services/countries";

function App() {
  const [fCode, setFCode] = useState("inr");
  const [tCode, setTCode] = useState("usd");
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState("");
  const [finalValue, setFinalValue] = useState();

  const handleClick = () => {
    if (!amount) return null;
    console.log(amount);
  };
  useEffect(() => {
    getExchangeRate(fCode.toLowerCase(), tCode.toLowerCase())
      .then((rate) => {
        setExchangeRate(rate);
        console.log(rate);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="app p-2 text-white text-2xl min-w-[50vw] mx-auto">
        <h1 className="text-3xl font-semibold uppercase">Currency Converter</h1>
        <Inputs amount={amount} setAmount={setAmount} />
        <Dropdown setFCode={setFCode} setTCode={setTCode} />
        <Result finalValue={finalValue} />
        <button
          className="w-full py-3 mt-4 rounded-sm bg-blue-500 hover:bg-blue-600 transition-colors"
          onClick={handleClick}
        >
          Get Exchange Rate
        </button>
      </div>
    </>
  );
}

export default App;
