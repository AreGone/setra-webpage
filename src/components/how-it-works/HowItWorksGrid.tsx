import { SimpleGrid } from "@chakra-ui/react";
import { howItWorksItems } from "./HowitWorksData";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorksGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mt={16}>
      {howItWorksItems.map((item) => (
        <HowItWorksItem item={item} />
      ))}
    </SimpleGrid>
  );
};

export default HowItWorksGrid;
