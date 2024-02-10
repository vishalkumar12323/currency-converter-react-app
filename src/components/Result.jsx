const Result = ({ output, countryCode, value }) => {
  return (
    <>
      <div className="p-2 mt-5 text-center text-3xl">
        {output ? (
          <p>
            {value} {countryCode.fCode.toUpperCase()} ={" "}
            {Math.round(output * value) + " "}
            {countryCode.tCode.toUpperCase()}
          </p>
        ) : (
          <p>1 USD = {output} INR</p>
        )}
      </div>
    </>
  );
};

export { Result };
