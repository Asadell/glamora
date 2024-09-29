import { hero, starsLeft, starsRight } from "../../../assets";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-fit relative">
      <div className="flex w-full mt-10 lg:mt-20 justify-center items-center gap-2 lg:gap-4">
        <img
          src={starsLeft}
          alt="Stars Left"
          className="h-[80px] sm:h-[100px] lg:h-[150px]"
        />

        <h1 className="text-deepSlate text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
          Pancarkan Kilau Pesonamu<br />
          Bersama <span className="bg-primary-gradient text-transparent bg-clip-text">Glamora</span>
        </h1>

        <img
          src={starsRight}
          alt="Stars Right"
          className="h-[80px] sm:h-[100px] lg:h-[150px]"
        />
      </div>

      {/* Hero Image */}
      <div className="flex justify-center mt-6 lg:mt-10">
        <img
          src={hero}
          alt="Glamora Fitur"
          className="object-cover w-full max-w-[600px] sm:max-w-[700px] lg:max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
