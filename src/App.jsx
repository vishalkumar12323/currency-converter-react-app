import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";
import { useEffect, useState } from "react";
import { getExchangeRate } from "./Services";
import { countries, fromIndex, toIndex } from "./Services/countries";

function App() {
  const [flagCodeFrom, setFlagCodeFrom] = useState(countries[toIndex].country);
  const [flagCodeTo, setFlagCodeTo] = useState(countries[fromIndex].country);
  const [fCode, setFCode] = useState("inr");
  const [tCode, setTCode] = useState("usd");
  const [exchangeRate, setExchangeRate] = useState();
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  const handleClick = async () => {
    // if (!amount) return null;
    setAmount(value);
    console.log(amount);
    const data = await getExchangeRate(fCode, tCode);
    let rate = data[tCode];
    let finalRate = rate * amount;
    setExchangeRate(finalRate);
  };
  useEffect(() => {
    const findFCode = countries.find((i) => i.country === flagCodeFrom);
    const findTCode = countries.find((i) => i.country === flagCodeTo);
    setFCode(findFCode.code.toLowerCase());
    setTCode(findTCode.code.toLowerCase());
  }, [flagCodeFrom, flagCodeTo]);

  return (
    <>
      <div className="app p-2 text-white text-2xl min-w-[50vw] mx-auto">
        <h1 className="text-3xl font-semibold uppercase">Currency Converter</h1>
        <Inputs value={value} setValue={setValue} />
        <Dropdown
          flagCodeFrom={flagCodeFrom}
          flagCodeTo={flagCodeTo}
          setFlagCodeFrom={setFlagCodeFrom}
          setFlagCodeTo={setFlagCodeTo}
        />
        <Result exchangeRate={exchangeRate} />
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
