import { aboutBeranda } from "../../../assets";
import Container from "../../../components/Container";
import { ABOUT_INFO_LIST } from "../../../constants";

const About = () => {
  return (
    <Container className="my-[50px] lg:my-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-12 bg-paleIndigo rounded-[40px] overflow-hidden">
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] mb-6 sm:mb-8 lg:mb-9 bg-deepTeal text-transparent bg-clip-text">
              Kenalan dulu sama Glamora!
            </h1>
            <p className="reveal mb-6 sm:mb-8 text-[16px] sm:text-[18px] lg:text-[20px]">
              Glamora adalah platform revolusioner di dunia kecantikan dan fashion
              yang dirancang untuk membantu kamu tampil lebih percaya diri. Terus,
              apa sih tujuan yang mau Glamora capai? Coba cek di bawah!
            </p>
          </div>

          <div className="reveal grid grid-cols-3 w-full gap-4">
            {ABOUT_INFO_LIST.map((about, index) => (
              <div
                key={index}
                className="p-4 bg-lavenderHue rounded-2xl flex items-center justify-center text-center"
              >
                <span className="font-bold text-sm sm:text-base text-coolIndigo">
                  {about.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block h-full">
          <img
            src={aboutBeranda}
            alt="About"
            className="h-full object-cover min-w-[24rem]"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
