import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Survey from "./components/Survey";

const Beranda = () => {
  return (
    <div className="min-h-screen p-6">
      <Hero />
      <About />
      <Features />
      <Survey />
    </div>
  );
};

export default Beranda;
