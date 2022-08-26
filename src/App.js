import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import "./style/Erp.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <NavigationBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
