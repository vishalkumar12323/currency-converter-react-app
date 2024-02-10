import { Inputs } from "./components/Inputs";
import { Dropdown } from "./components/Dropdown";
import { Result } from "./components/Result";
import { useEffect, useState } from "react";
import { getExchangeRate } from "./Services";
import { countries, fromIndex, toIndex } from "./Services/countries";

function App() {
  const [flagCodeFrom, setFlagCodeFrom] = useState(countries[toIndex].country);
  const [flagCodeTo, setFlagCodeTo] = useState(countries[fromIndex].country);
  const [countryCode, setCountryCode] = useState({
    fCode: "usd",
    tCode: "inr",
  });
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(1);
  const [output, setOutput] = useState(null);

  const handleClick = () => {
    const findFCode = countries.find((i) => i.country === flagCodeFrom);
    const findTCode = countries.find((i) => i.country === flagCodeTo);
    setValue(inputValue);
    setCountryCode({
      fCode: findFCode.code.toLowerCase(),
      tCode: findTCode.code.toLowerCase(),
    });
  };

  useEffect(() => {
    getExchangeRate(countryCode.fCode, countryCode.tCode)
      .then((rate) => {
        setOutput(rate[countryCode.tCode]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value, countryCode, output]);
  return (
    <>
      <div className="app p-2 text-white text-2xl min-w-[50vw] mx-auto">
        <h1 className="text-3xl font-semibold uppercase">Currency Converter</h1>
        <Inputs inputValue={inputValue} setInputValue={setInputValue} />
        <Dropdown
          flagCodeFrom={flagCodeFrom}
          flagCodeTo={flagCodeTo}
          setFlagCodeFrom={setFlagCodeFrom}
          setFlagCodeTo={setFlagCodeTo}
        />
        <Result output={output} value={value} countryCode={countryCode} />
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
