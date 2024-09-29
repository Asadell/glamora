import { faceAnalysis, noteText } from "../../assets";
import Container from "../Container";
import AnalisisBox from "./AnalisisBox";

const AnalisisWajah = () => {
  return (
    <Container className="my-16 flex flex-col">
      <h1 className="titleHighlight text-center">Analisis Wajah</h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center mt-10 w-full">
        <AnalisisBox index={0} />
        <img src={faceAnalysis} alt="Face" className="h-[26rem] rounded-xl object-contain w-full lg:w-[300px]" />
        <AnalisisBox index={1} />
      </div>
      <div className="flex flex-col lg:flex-row rounded-3xl mt-9 overflow-hidden">
        <div className="flex-1 bg-paleIndigo px-6 lg:px-9 py-6 flex flex-col gap-3 justify-center items-start">
          <h2 className="font-bold text-2xl lg:text-4xl bg-slateBlue text-transparent bg-clip-text pb-1">Progress Tracking</h2>
          <p className="bg-deepTeal text-base lg:text-xl text-transparent bg-clip-text">
            Simpan hasil analisismu untuk dapat melacak perkembangan kondisi kulit.
          </p>
        </div>
        <div className="flex-1 bg-white px-6 lg:px-9 py-6">
          <h2 className="text-sm font-bold mb-1">Catatan</h2>
          <div className="p-4 flex flex-row justify-center items-start gap-4 border-solid border-2 rounded-2xl">
            <img src={noteText} alt="Note" className="h-4" />
            <textarea
              name="catatan"
              id="catatan"
              placeholder="Tulis Catatan"
              className="w-full h-[72px] resize-none outline-none"
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <span className="font-medium">
              Status: <span className="bg-redCoral text-transparent bg-clip-text">Belum disimpan</span>
            </span>
            <button className="bg-primary-gradient rounded-[100px] py-2 px-6 lg:py-4 lg:px-10 text-base font-bold text-white">
              Simpan Progress
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AnalisisWajah;
