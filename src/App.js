import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import "./style/Erp.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <NavigationBar />
        <Hero />
      </div>

      <Container>
        <AboutUs />
      </Container>
    </>
  );
}

export default App;
