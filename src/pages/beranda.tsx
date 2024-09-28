import About from "../components/Beranda/About";
import Features from "../components/Beranda/Features";
import Hero from "../components/Beranda/Hero";
import Survey from "../components/Beranda/Survey";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Beranda = () => {
  return (
    <div className="bg-lavenderHue min-h-screen ">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Survey/>
      <Footer/>
    </div>
  );
}

export default Beranda;