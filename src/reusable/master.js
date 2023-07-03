import "./App.css";

function App() {
    return (
      <>
        <Header />
        <Howtouse />
      </>
    );
  }
  
  export default App;
  

  Const handleSubmit = (event) => {
    event.preventDefault();
    Const amount = event.currentTarget.elements.NAME
  }
  <form onSubmit={handleSubmit}> … </form>
  Kwota: .amount
waluta: .currencyName
Const currency = event.currentTarget.elements.currencyName.value;




Na początku komponentu converter:
Const [result, setResult] = useState(0);

I potem po dostaniu danych:
axios.get().then((data) => {
   …
   setResult(NOWA_WARTOSC)
})