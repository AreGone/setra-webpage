import { MainHeadingGroup, Section } from "../ui";
import { howItWorksHeading, howItWorksText } from "./HowitWorksData";
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorks = () => {
  return (
    <Section variant="gradientGray" section={"hero"} id={"howItWorks"}>
      <MainHeadingGroup heading={howItWorksHeading} text={howItWorksText} />
      <HowItWorksGrid />
    </Section>
  );
};

export default HowItWorks;
