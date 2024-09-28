import { NavLink } from "react-router-dom";
import { faceInMirror } from "../../assets";
import Container from "../Container";

const Survey = () => {
  return (
    <Container className="my-[100px] ">
      <div className="flex flex-row justify-between items-center bg-paleIndigo rounded-[40px] overflow-hidden">
        <div className="flex-1 w-full h-[348px]">
          <img src={faceInMirror} alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="py-1 px-12 flex flex-col justify-center items-start">
            <h1 className="font-bold text-[40px] mb-9 bg-deepTeal text-transparent bg-clip-text">Survey Kondisi Kulit</h1>
            <p className="mb-8 text-[20px]">Dengan mengisi survey, dapat membantu memahami jenis kulit, kebiasaan perawatan kulit, dan kebutuhan kamu, loh.</p>
            <NavLink to='/survey' className='py-4 px-[60px] bg-white rounded-[100px]'>
              <span className="text-base font-bold bg-primary-gradient text-transparent bg-clip-text">Ikuti Survey</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Survey;