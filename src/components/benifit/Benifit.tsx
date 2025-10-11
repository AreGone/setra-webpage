import { Section, TwoColGrid } from "../ui";
import BenifitContent from "./BenifitContent";
import BenifitInfo from "./BenifitInfo";

const Benifit = () => {
  return (
    <Section variant={"white"} section={"simple"} id={"benifitSection"}>
      <TwoColGrid>
        <BenifitContent />
        <BenifitInfo />
      </TwoColGrid>
    </Section>
  );
};

export default Benifit;
