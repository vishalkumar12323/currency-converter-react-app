import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";
import { useEffect, useState } from "react";
import { getExchangeRate } from "./Services";
import { countries, fromIndex, toIndex } from "./Services/countries";

function App() {
  const [flagCodeFrom, setFlagCodeFrom] = useState(countries[toIndex].country);
  const [flagCodeTo, setFlagCodeTo] = useState(countries[fromIndex].country);
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState("");
  const [finalValue, setFinalValue] = useState();

  const handleClick = () => {
    if (!amount) return null;
    console.log(amount);
  };
  useEffect(() => {
    getExchangeRate("inr", "usd")
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
        <Dropdown
          flagCodeFrom={flagCodeFrom}
          flagCodeTo={flagCodeTo}
          setFlagCodeFrom={setFlagCodeFrom}
          setFlagCodeTo={setFlagCodeTo}
        />
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
