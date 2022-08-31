import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import "./components/styles/ErpApp.css";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <NavigationBar />
        <Hero />
      </div>

      <AboutUs />

      <Layanan />

      <Info />
    </>
  );
}

export default App;
