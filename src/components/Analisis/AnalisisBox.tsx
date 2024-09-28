import { ANALISIS_WAJAH_LIST } from "../../constants";

interface AnalisisWajahProps {
  index: number,
}

const AnalisisBox = ({index} : AnalisisWajahProps) => {
  return (
    <div className="flex flex-col justify-center bg-white rounded-3xl p-6">
      <span className="text-center font-bold text-[20px] mb-6">
        {ANALISIS_WAJAH_LIST[index].title}
      </span>
      <div className="flex flex-row justify-between items-center px-7 gap-12 mb-7">
        {ANALISIS_WAJAH_LIST[index].data.map((icon) => (
          <div className="flex flex-col justify-center items-center">
            <img src={icon.image} alt={icon.shapeType} className="w-10 h-10" />
            <p className="text-[14px] font-normal text-nowrap">{icon.shapeType}</p>
            <span className="text-base font-bold">{icon.shapeName}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 p-4 rounded-2xl bg-lavenderHue">
        <h5 className="font-bold bg-slateBlue text-transparent bg-clip-text">{ANALISIS_WAJAH_LIST[index].subtitle}</h5>
        <p className="bg-deepTeal text-transparent bg-clip-text">{ANALISIS_WAJAH_LIST[index].text}</p>
      </div>
    </div>
  );
}

export default AnalisisBox;