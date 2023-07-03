import Container from "../../reusable/Container/Container";
import Converter from "./Converter/Converter";
import Howtouse from "./Howtouse/Howtouse";
import "./Main.css";

function Main() {
  return (
    
      
      <main className="mainContainer" id="description">
        <Container>
            <Howtouse/>
            <Converter/>
        </Container>
      </main>
    
  );
}


export default Main;
