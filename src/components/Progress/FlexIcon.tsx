interface ShapeData {
  image: string,
  shapeType: string,
  shapeName: string,
}

interface FlexIconProps {
  data: ShapeData[],
}

const FlexIcon = ({ data } : FlexIconProps) => {
  return (
    <div className="flex flex-row justify-between px-7 mb-7 w-full">
    {/* <div className="flex flex-row justify-between"> */}
      {
        data.map((item) => (
          <div className="flex flex-col justify-center items-center w-20">
            <img src={item.image} alt={item.shapeType} className="w-8 h-8"/>
            <span className="text-[14px] font-normal text-nowrap">{item.shapeType}</span>
            <span className="text-base font-bold">{item.shapeName}</span>
          </div>
          // <div className="flex flex-col justify-center items-center w-20">
          //   <img src={item.image} alt={item.shapeType} className="w-8 h-8"/>
          //   <span className="text-[14px] font-normal text-nowrap">{item.shapeType}</span>
          //   <span className="text-base font-bold">{item.shapeName}</span>
          // </div>
        ))
      }
    </div>
  );
}

export default FlexIcon;