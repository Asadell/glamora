import Container from "../../../components/Container";
import WeeklyProgress from "./WeeklyProgress";

const Hero = () => {
  return (
    <Container className="my-16">
      <h1 className="titleHighlight pb-10">Progress Tracking</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white rounded-3xl overflow-hidden w-full p-8">
          <WeeklyProgress/>
        </div>
        <div className="flex-1 bg-softIndigo rounded-3xl overflow-hidden p-8">
          <div className="reveal">
            <h2 className="text-2xl font-bold bg-deepSlate text-transparent bg-clip-text text-center mb-6">Kesimpulan</h2>
            <p className="font-light text-xl bg-midnightBlack text-transparent bg-clip-text">Kelembapan kulit secara umum berada dalam kondisi baik, hanya sedikit hari yang menunjukkan kekeringan. Sebaliknya, sebum dan pori-pori lebih tidak stabil, terutama pada akhir minggu, dengan beberapa hari menunjukkan kondisi yang kurang optimal. Secara keseluruhan, sebagian besar metrik baik, namun sebum dan pori-pori memerlukan perhatian lebih untuk perbaikan.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;