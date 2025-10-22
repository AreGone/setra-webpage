
import AiFeature from "@/components/ai-feature/AiFeature";
import Benefit from "@/components/benefit/Benefit";
import CTA from "@/components/cta/CTA";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Stats from "@/components/stats/Stats";
import { Box } from "@chakra-ui/react";






const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Benefit />
      <CTA />
    </Box>
  );
};

export default Home;
