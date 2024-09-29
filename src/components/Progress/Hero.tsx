import Container from "../Container";

const Hero = () => {
  return (
    <Container className="my-16">
      <h1 className="titleHighlight pb-10">Progress Tracking</h1>
      <div className="flex flex-row gap-8">
        <div className="flex-1 bg-white rounded-3xl overflow-hidden p-8">
          <h2 className="text-xl font-bold bg-deepTeal text-transparent bg-clip-text text-center mb-6">Progress Mingguan</h2>
          
          <div className="flex flex-row">
            <div className="flex w-20">

            </div>
          </div>
          
        </div>
        <div className="flex-1 bg-softIndigo rounded-3xl overflow-hidden p-8">
          <h2 className="text-2xl font-bold bg-deepSlate text-transparent bg-clip-text text-center mb-6">Kesimpulan</h2>
          <p className="font-medium text-xl bg-midnightBlack text-transparent bg-clip-text">Kelembapan kulit secara umum berada dalam kondisi baik, hanya sedikit hari yang menunjukkan kekeringan. Sebaliknya, sebum dan pori-pori lebih tidak stabil, terutama pada akhir minggu, dengan beberapa hari menunjukkan kondisi yang kurang optimal. Secara keseluruhan, sebagian besar metrik baik, namun sebum dan pori-pori memerlukan perhatian lebih untuk perbaikan.</p>
        </div>
      </div>
    </Container>
  );
}

export default Hero;