import { starFeature } from "../../../assets";
import Container from "../../../components/Container";
import { FEATURE_BERANDA_LIST } from "../../../constants";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <Container className="my-[100px]">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 relative">
        <img src={starFeature} alt="Star" className="w-[100px] h-[100px] absolute -top-10 -left-10" />
        {FEATURE_BERANDA_LIST.map((feature) => (
          <FeatureBox isFeature={feature.isFeature} title={feature.title} text={feature.text} image={feature.image}/>
        ))}
        <img src={starFeature} alt="Star" className="w-[100px] h-[100px] absolute -bottom-10 -right-10" />
      </div>
    </Container>
  );
}

export default Features;