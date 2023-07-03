import "./Converter.css";


function Converter() {
  return (
    <div className="sectionContainer" id="converter">
      <div className="formContainer">
        <form className="dataEntryForm" id="converterForm">
          <div className="dataEntryField">
            <label for="inputAmount" className="labelClass">
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
            <label for="selectCurrency" className="labelClass">
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
            <label for="askForCurrencies" className="labelClass">
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
            <label for="conversionResult" className="labelClass">
              wartość waluty
            </label>
            <div
              name="conversResult"
              className="conversionResult dataField"
              id="conversionResult"
            >
              TO: WYNIK PLN
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Converter;
