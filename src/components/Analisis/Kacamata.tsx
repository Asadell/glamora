import { REKOMENDASI_KACAMATA_LIST } from "../../constants";
import Container from "../Container";
import GridBox from "./GridBox";

const Kacamata = () => {
  return (
    <Container className="my-[100px] flex flex-col">
      <h1 className="titleHighlight">Rekomendasi Kacamata</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {REKOMENDASI_KACAMATA_LIST.map((rek) => (
          <GridBox image={rek.image} title={rek.title} text={rek.text}/>
        ))}
      </div>
    </Container>
  );
}

export default Kacamata;