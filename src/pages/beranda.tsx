import Hero from "../components/Beranda/Hero";
import Navbar from "../components/Survey/Navbar";

const Beranda = () => {
  return (
    <div className="bg-lavenderHue min-h-screen ">
      <Navbar/>
      <Hero/>
      <h1>Beranda</h1>
    </div>
  );
}

export default Beranda;