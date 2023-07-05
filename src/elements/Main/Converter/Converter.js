import axios from "axios";
import { useState } from "react";

import "./Converter.css";

function Converter() {
  const [result, setResult] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.currentTarget.elements.amount.value;
    const currency = event.currentTarget.elements.currencyName.value;
    axios
      .get(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
      )
      .then((response) => {
        const isDataValid =
          response.data.rates?.length > 0 && response.data.rates[0].mid;
        if (isDataValid) {
          const convertedAmount = (amount * response.data.rates[0].mid).toFixed(
            2
          );
          setResult(convertedAmount);
        } else {
        }
      })
      .catch(() => {
        console.log("cos");
      });
  };

  return (
    <div className="sectionContainer" id="converter">
      <div className="formContainer">
        <form className="dataEntryForm" onSubmit={handleSubmit}>
          <div className="dataEntryField">
            <label htmlFor="inputAmount" className="labelClass">
              wpisz wartosc
            </label>
            <input
              name="amount"
              className="dataField"
              type="text"
              id="inputAmount"
            />
          </div>

          <div className="dataEntryField">
            <label htmlFor="selectCurrency" className="labelClass">
              wybierz walute
            </label>
            <select
              name="currencyName"
              className="dataField"
              id="selectCurrency"
            >
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="dataEntryField">
            <label htmlFor="askForCurrencies" className="labelClass">
              nacisnij poniżej
            </label>

            <button
              type="submit"
              name="requestButton"
              className="dataField"
              id="askForCurrencies"
            >
              PRZELICZ
            </button>
          </div>

          <div className="resultField">
            <label htmlFor="conversionResult" className="labelClass">
              wartość waluty
            </label>
            <div
              name="conversResult"
              className="conversionResult dataField"
              id="conversionResult"
            >
              TO: {result} PLN
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Converter;
