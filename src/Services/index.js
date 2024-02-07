// https://flagsapi.com/IN/flat/64.png
// usd/inr.json
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const getFlagFromCode = async (code) => {
  return `https://flagsapi.com/${code}/flat/64.png`;
};

export { getFlagFromCode };
