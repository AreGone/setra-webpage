import { Box } from "@chakra-ui/react";
import { Hero } from "../hero";
import { Stats } from "../stats";
import { AiFeature } from "../ai-feature";
import { HowItWorks } from "../how-it-works";


const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <HowItWorks />
      <Box backgroundColor={"lavender"}>Benifit Section</Box>
      <Box backgroundColor={"lightcoral"}>CTA Section</Box>
      <Box backgroundColor={"gray"}>footer</Box>
    </Box>
  );
};

export default Home;
