import { NavLink } from "react-router-dom";
import { arrowRight } from "../../../assets";

interface FeatureBoxProps {
  isFeature: boolean,
  title: string,
  text: string,
  url: string,
  image: string,
}

const FeatureBox = ({
  isFeature,
  title,
  text,
  url,
  image,
}: FeatureBoxProps) => {
  return (
    <>
      {isFeature ? (
        <div className="bg-white md:h-[246px] flex flex-col md:flex-row justify-between items-center px-9 pt-2 md:pt-0 pb-8 md:pb-0 rounded-[40px]">
          <div className="flex flex-col justify-center items-start reveal">
            <h2 className="font-bold text-2xl mb-4">{title}</h2>
            <p className="font-normal text-base mb-6">{text}</p>
            <NavLink to={url} className='flex flex-row gap-2 items-center'>
              <img src={arrowRight} alt="Arrow Right" />
              <span className="text-base font-medium text-dustyRose underline">Coba Sekarang!</span>
            </NavLink>
          </div>
          <img src={image} alt={title} className="h-[150px] order-first md:order-none" />
        </div>
      ) : (
        <div className=" bg-dustyRose h-[246px] flex flex-col justify-center gap-3 pl-9 rounded-[40px]">
          <h2 className="font-bold text-[32px] text-white">{title}</h2>
          <p className="text-[20px] text-white">{text}</p>
        </div>
        )}
    </>
  );
}

export default FeatureBox;