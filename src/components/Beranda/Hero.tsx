import { ellipseAnalisis, faceBeranda, macbook, starsLeft, starsRight } from "../../assets";
import { INFO_BOX_BERANDA, LINE_INFO_BOX_BERANDA } from "../../constants";
import InfoBox from "./InfoBox";
import LineInfoBox from "./LineInfoBox";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-fit relative">
      <div className="flex justify-center mt-4 relative">
        <img src={faceBeranda} alt="Face" className="h-[840]"/>
        <div className="absolute top-[370px]">
          <div className="absolute top-6 left-[74px] flex flex-row items-center text-white text-[10px] font-bold gap-2 bg-primary-gradient py-2 px-3 rounded-[100px]">
            <img src={ellipseAnalisis} alt="ellipse" className="h-[10px]" />
            <span>ANALISIS WAJAH</span>
          </div>
          <img src={macbook} alt="Macbook" />
        </div>
        {LINE_INFO_BOX_BERANDA.map((line) => 
          <LineInfoBox icon={line.icon} bottom={line.bottom} right={line.right} left={line.left}/>
        )}
        {INFO_BOX_BERANDA.map((box) => (
          <InfoBox icon={box.icon} alt={box.alt} title={box.title} text={box.text} bottom={box.bottom} right={box.right} left={box.left}/>
        ))}
      </div>
      <div className="flex w-full mt-20 justify-center gap-10 absolute order">
        <div>
          <img src={starsLeft} alt="Stars Left" className="h-[150px]"/>
        </div>
        <div>
          <h1 className="text-deepSlate text-center text-5xl font-bold text reveal">Pancarkan Kilau Pesonamu<br/>Bersama <span className="bg-primary-gradient text-transparent bg-clip-text">Glamora</span></h1>
        </div>
        <div>
          <img src={starsRight} alt="Stars Right" className="h-[150px]"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;