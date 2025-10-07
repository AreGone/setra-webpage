import { Box } from "@chakra-ui/react";
import { Hero } from "../hero";
import { Stats } from "../stats";
import { AiFeature } from "../ai-feature";


const Home = () => {
  return (
    <Box as={"main"} position={"relative"}>
      <Hero />
      <Stats />
      <AiFeature />
      <Box backgroundColor={"blueviolet"}>How it works Section</Box>
      <Box backgroundColor={"lavender"}>Benifit Section</Box>
      <Box backgroundColor={"lightcoral"}>CTA Section</Box>
      <Box backgroundColor={"gray"}>footer</Box>
    </Box>
  );
};

export default Home;
