import { moreCircle } from "../../assets";

interface ShapeData {
  image: string,
  shapeType: string,
  shapeName: string,
}

interface Catatan {
  date: string,
  text: string,
  data: ShapeData[],
}

interface CatatanBoxProps {
  catatan: Catatan;
}

const CatatanBox = ({ catatan } : CatatanBoxProps) => {
  return (
    <div className="flex flex-col justify-between w-[434px] rounded-3xl overflow-hidden bg-white gap-6 p-6">
      <div className="flex flex-row justify-between">
        <span className="font-medium">{catatan.date}</span>
        <img src={moreCircle} alt="Circle" />
      </div>
      <div className="flex flex-row justify-between">
        {catatan.data.map((item) => (
          <div className="flex flex-col justify-center items-center w-20">
            <img src={item.image} alt={item.shapeType} className="w-8 h-8"/>
            <span className="text-[14px] font-normal text-nowrap">{item.shapeType}</span>
            <span className="text-base font-bold">{item.shapeName}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-base font-bold bg-slateBlue text-transparent bg-clip-text">Catatan</span>
        <p className={`font-normal text-base ${!catatan.text ? 'bg-slateStorm' : 'bg-deepTeal'} text-transparent bg-clip-text`}>{!catatan.text ? '(Belum ada catatan)' : catatan.text}</p>
      </div>
    </div>
  );
}

export default CatatanBox;