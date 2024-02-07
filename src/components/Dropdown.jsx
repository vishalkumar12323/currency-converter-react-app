import { useEffect, useRef } from "react";
import { countries } from "../Services/countries";

const Dropdown = () => {
  const optionRef = useRef();
  // useEffect(() => {}, []);
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-y-2">
        <div className="flex justify-center gap-x-4 items-center p-2 mt-4 border">
          <div>
            <img src="/images/india.webp" alt="india" className="w-[100px]" />
          </div>
          <select
            name="from"
            id="select"
            className="bg-transparent cursor-pointer "
          >
            {countries.map((element, index) => {
              return (
                <option
                  ref={optionRef}
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
        <div className="flex justify-center items-center my-4">
          <img
            src="/images/leftRight.svg"
            alt="up-down arrow"
            className="w-[2rem] text-white"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 p-2 sm:mt-3 border">
          <div>
            <img src="/images/us.jpg" alt="india" className="w-[100px]" />
          </div>
          <select name="to" className=" bg-transparent cursor-pointer">
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
    </>
  );
};

export { Dropdown };
