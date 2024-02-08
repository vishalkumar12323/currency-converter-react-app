import { getFlagFromCode } from "../Services/index";
import { countries, fromIndex, toIndex } from "../Services/countries";
import { useRef, useState } from "react";

const Dropdown = ({ setFCode, setTCode }) => {
  const [flagCodeFrom, setFlagCodeFrom] = useState(countries[toIndex].country);
  const [flagCodeTo, setFlagCodeTo] = useState(countries[fromIndex].country);

  const handleChangeFrom = (e) => {
    setFlagCodeFrom(e.target.value);
    const findFCode = countries.find((item) => item.country === e.target.value);
    setFCode(findFCode.code);
  };
  const handleChangeTo = (e) => {
    setFlagCodeTo(e.target.value);
    const findTCode = countries.find((item) => item.country === e.target.value);
    setFCode(findTCode.code);
  };
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-y-2 text-xl">
        <div className="p-2 mt-4">
          <span>From</span>

          <div className="flex justify-center gap-x-4 items-center border rounded-sm">
            <div>
              <img
                src={getFlagFromCode(flagCodeFrom)}
                alt="flag img"
                className="w-[100px]"
              />
            </div>
            <select
              name="from"
              id="select"
              className="bg-transparent cursor-pointer border outline-none"
              defaultValue={countries[toIndex].country}
              onChange={handleChangeFrom}
            >
              {countries.map((element, index) => {
                return (
                  <option
                    key={index}
                    value={element.country}
                    className="text-black"
                    onClick={(e) => console.log(e.currentTarget.value)}
                  >
                    {element.code}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/leftRight.svg"
            alt="up-down arrow"
            className="w-[2rem] text-white mt-5"
          />
        </div>
        <div className="p-2 sm:mt-3">
          <span>To</span>

          <div className="flex justify-center items-center gap-x-4  border rounded-sm">
            <div>
              <img
                src={getFlagFromCode(flagCodeTo)}
                alt="flag img"
                className="w-[100px]"
              />
            </div>
            <select
              name="to"
              className=" bg-transparent cursor-pointer border outline-none"
              defaultValue={countries[fromIndex].country}
              onChange={handleChangeTo}
            >
              {countries.map((element, index) => {
                return (
                  <option
                    key={index}
                    value={element.country}
                    className="text-black origin-bottom"
                  >
                    {element.code}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dropdown };
