const Inputs = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <>
      <div className="input">
        <h2 className="py-4">Enter Amount</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="number"
          className="py-3 pl-1 outline-none rounded-sm w-full border bg-transparent"
        />
      </div>
    </>
  );
};

export { Inputs };
