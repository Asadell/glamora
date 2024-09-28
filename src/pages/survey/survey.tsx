import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VirtualTryOn from "./components/VirtualTryOn";

const Survey = () => {
  return (
    <div className="bg-lavenderHue min-h-screen">
      <Navbar/>
      <VirtualTryOn/>
      <Footer/>
    </div>
  );
}

export default Survey;