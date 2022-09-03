import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import "./components/styles/ErpApp.css";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
import Partners from "./components/Partners";
import Produk from "./components/Produk";
import Pesan from "./components/Pesan";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

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
      <Partners />

      <Produk />

      <Testimonials />

      <Pesan />

      <Faq />

      <Footer />
    </>
  );
}

export default App;
