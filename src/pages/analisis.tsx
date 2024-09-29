import AnalisisWajah from "../components/Analisis/AnalisisWajah";
import Kacamata from "../components/Analisis/Kacamata";
import Kandungan from "../components/Analisis/Kandungan";
import KosmetikGaya from "../components/Analisis/KosmetikGaya";

const Analisis = () => {
  return (
    <div className="bg-lavenderHue min-h-screen ">
      <AnalisisWajah/>
      <Kandungan/>
      <KosmetikGaya/>
      <Kacamata/>
    </div>
  );
}

export default Analisis;