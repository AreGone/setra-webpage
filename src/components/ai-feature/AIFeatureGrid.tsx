import { SimpleGrid } from "@chakra-ui/react";
import AiFeatureCard from "./AiFeatureCard";
import { features } from "./aiFeatureData";


const AIFeatureGrid = () => {
  
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
      {features.map((feature,index) => (
        <AiFeatureCard feature={feature} key={index} />
      ))}
    </SimpleGrid>
  );
};

export default AIFeatureGrid;
