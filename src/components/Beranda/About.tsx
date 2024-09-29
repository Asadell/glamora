import { aboutBeranda } from "../../assets";
import { ABOUT_INFO_LIST } from "../../constants";
import Container from "../Container";

const About = () => {
  return (
    <Container className="my-[100px] ">
      <div className="flex flex-row justify-between items-center gap-12 bg-paleIndigo rounded-[40px] overflow-hidden">
        <div className="ml-12 py-15 flex flex-col justify-center items-start">
          <h1 className="font-bold text-[32px] mb-9 bg-deepTeal text-transparent bg-clip-text">Kenalan dulu sama Glamora!</h1>
          <p className="reveal mb-8 text-[20px]">Glamora adalah platform revolusioner di dunia kecantikan dan fashion yang dirancang untuk membantu kamu tampil lebih percaya diri. Terus, apa sih tujuan yang mau Glamora capai? Coba cek di bawah!</p>
          <div className="reveal flex gap-6">
            {ABOUT_INFO_LIST.map((about) => (
              <div className="p-4 bg-lavenderHue rounded-2xl">
                <span className="font-bold text-base text-coolIndigo">{about.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 h-full">
          <img src={aboutBeranda} alt="About" className="w-[472px] h-full object-cover" />
        </div>
      </div>
    </Container>
  );
}

export default About;