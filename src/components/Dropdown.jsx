const Dropdown = () => {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-y-2">
        <div className="flex justify-center gap-x-4 items-center p-2 mt-4 border">
          <div>
            <img src="/images/india.webp" alt="india" className="w-[100px]" />
          </div>
          <select
            name="select"
            id="select"
            className="bg-transparent cursor-pointer "
          >
            <option value="INR" className="text-black">
              INR
            </option>
            <option value="USD" className="text-black">
              USD
            </option>
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
          <select className=" bg-transparent cursor-pointer">
            <option value="AUS" className="text-black">
              AUS
            </option>
            <option value="INR" className="text-black">
              INR
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export { Dropdown };
