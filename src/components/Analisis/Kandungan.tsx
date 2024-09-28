import { REKOMENDASI_KANDUNGAN_LIST } from "../../constants";
import Container from "../Container";
import GridBox from "./GridBox";

const Kandungan = () => {
  return (
    <Container className="my-[100px] flex flex-col">
      <h1 className="titleHighlight">Rekomendasi Kandungan</h1>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {REKOMENDASI_KANDUNGAN_LIST.map((rek) => (
          <GridBox image={rek.image} title={rek.title} text={rek.text}/>
        ))}
      </div>
    </Container>
  );
}

export default Kandungan;