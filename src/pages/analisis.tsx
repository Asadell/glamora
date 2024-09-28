import AnalisisWajah from "../components/Analisis/AnalisisWajah";
import Kacamata from "../components/Analisis/Kacamata";
import Kandungan from "../components/Analisis/Kandungan";
import KosmetikGaya from "../components/Analisis/KosmetikGaya";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Analisis = () => {
  return (
    <div className="bg-[#EAEBF9] min-h-screen">
      <Navbar/>
      <AnalisisWajah/>
      <Kandungan/>
      <KosmetikGaya/>
      <Kacamata/>
      <Footer/>
    </div>
  );
}

export default Analisis;