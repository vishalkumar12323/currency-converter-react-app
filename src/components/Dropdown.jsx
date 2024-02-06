const Dropdown = () => {
  return (
    <>
      <div className="dropdown grid gap-y-2">
        <span>From</span>
        <div className="left flex justify-center gap-x-4 items-center bg-white p-2">
          <div className="flag">
            <img src="/images/india.webp" alt="india" className="w-[100px]" />
          </div>
          <select name="select" id="select" className="text-black">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="flex justify-center items-center my-4">
          <img
            src="/images/updown.svg"
            alt="up-down arrow"
            className="w-[2rem] text-white"
          />
        </div>
        <span>To</span>
        <div className="right flex justify-center items-center gap-x-4 bg-white p-2">
          <div className="flag">
            <img src="/images/us.jpg" alt="india" className="w-[100px]" />
          </div>
          <select name="" id="" className="text-black">
            <option value="AUS">AUS</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>
    </>
  );
};

export { Dropdown };
