import { SimpleGrid } from "@chakra-ui/react";
import AiFeatureCard from "./AiFeatureCard";
import { features } from "./aiFeatureData";

const AIFeatureGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
      {features.map((feature) => (
        <AiFeatureCard
          checkedTexts={feature.checkedTexts}
          title={feature.title}
          text={feature.text}
          color={feature.color}
          icon={feature.icon}
          key={feature.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default AIFeatureGrid;
