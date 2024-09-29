import Container from "../../../components/Container";
import { CATATAN_PROGRESS_LIST } from "../../../constants";
import CatatanBox from "./CatatanBox";

const Catatan = () => {
  return (
    <Container className="my-16">
      <h1 className="titleHighlight pb-10">Catatan Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATATAN_PROGRESS_LIST.map((catatan) => (
          <CatatanBox catatan={catatan}/>
        ))}
      </div>
    </Container>
  );
}

export default Catatan;