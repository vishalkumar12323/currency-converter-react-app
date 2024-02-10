const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const getExchangeRate = async (fCode, tCode) => {
  const Rate = await fetch(`${BASE_URL}${fCode}/${tCode}.json`);
  return Rate.json();
};
const getFlagFromCode = (code) => `https://flagsapi.com/${code}/flat/64.png`;

export { getFlagFromCode, getExchangeRate };
