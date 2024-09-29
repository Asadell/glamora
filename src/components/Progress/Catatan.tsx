import { CATATAN_PROGRESS_LIST } from "../../constants";
import Container from "../Container";
import CatatanBox from "./CatatanBox";

const Catatan = () => {
  return (
    <Container className="my-16">
      <h1 className="titleHighlight pb-10">Catatan Progress</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {CATATAN_PROGRESS_LIST.map((catatan) => (
          <CatatanBox catatan={catatan}/>
        ))}
      </div>
    </Container>
  );
}

export default Catatan;