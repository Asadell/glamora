import About from "../components/Beranda/About";
import Features from "../components/Beranda/Features";
import Hero from "../components/Beranda/Hero";
import Survey from "../components/Beranda/Survey";

const Beranda = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <Features/>
      <Survey/>
    </div>
  );
}

export default Beranda;