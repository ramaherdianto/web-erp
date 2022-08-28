import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import "./style/Erp.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <NavigationBar />
        <Hero />
      </div>

      <AboutUs />
    </>
  );
}

export default App;
