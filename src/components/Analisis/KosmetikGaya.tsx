import { GAYA_RAMBUT_LIST, KOSMETIK_LIST } from "../../constants";
import Container from "../Container";

const KosmetikGaya = () => {
  return (
    <Container className="my-16 flex flex-col lg:flex-row gap-16">
      <div className="flex-1">
        <h1 className="titleHighlight pb-10 text-center lg:text-left">Kosmetik</h1>
        <div className="flex flex-col gap-6">
          {KOSMETIK_LIST.map((kos, index) => (
            <div key={index} className="rounded-3xl flex flex-row justify-between bg-white overflow-hidden">
              <div className="flex flex-col p-6 gap-3 justify-center items-start">
                <span className="text-[20px] font-bold bg-darkMocha text-transparent bg-clip-text">{kos.title}</span>
                <p>{kos.text}</p>
              </div>
              <img src={kos.image} alt={kos.title} className="h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="titleHighlight pb-10 text-center lg:text-left">Gaya Rambut</h1>
        <div className="flex flex-col gap-6">
          {GAYA_RAMBUT_LIST.map((rambut, index) => (
            <div key={index} className="rounded-3xl flex flex-row justify-between bg-white overflow-hidden">
              <div className="flex flex-col gap-3 p-6 justify-center items-start">
                <span className="text-[20px] font-bold bg-darkMocha text-transparent bg-clip-text">{rambut.title}</span>
                <p>{rambut.text}</p>
              </div>
              <img src={rambut.image} alt={rambut.title} className="h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default KosmetikGaya;
