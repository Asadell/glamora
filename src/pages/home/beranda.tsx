import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Survey from "./components/Survey";

const Beranda = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Survey />
    </div>
  );
};

export default Beranda;
