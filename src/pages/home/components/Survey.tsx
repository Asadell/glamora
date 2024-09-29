import { NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { faceInMirror } from "../../../assets";

const Survey = () => {
  return (
    <Container className="my-[100px] p-6">
      <div className="flex flex-col text-white lg:flex-row justify-between items-center bg-primary-gradient rounded-[40px] overflow-hidden">
        <div className="flex-1 w-full h-[348px] lg:h-[400px]">
          <img src={faceInMirror} alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-6 lg:p-12">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] mb-6 text-white bg-deepTeal text-transparent bg-clip-text">Survey Kondisi Kulit</h1>
            <p className="mb-6 text-[16px] sm:text-[18px] lg:text-[20px] reveal">
              Dengan mengisi survey, dapat membantu memahami jenis kulit, kebiasaan perawatan kulit, dan kebutuhan kamu, loh.
            </p>
            <div className="w-full my-4 flex justify-center md:justify-normal">
            <NavLink to='/survey' className='py-4 px-[60px] w-full text-center md:w-fit bg-white rounded-[100px] reveal'>
              <span className="text-base font-bold bg-primary-gradient text-transparent bg-clip-text">Ikuti Survey</span>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Survey;
