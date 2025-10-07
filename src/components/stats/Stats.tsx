import { FeatureItem, Section } from "../ui";
import { SimpleGrid } from "@chakra-ui/react";


const Stats = () => {
  const statFeatures = [
    { featureTitle: "1M+", featureName: "Hours of Video Analyzed" },
    { featureTitle: "99.9%", featureName: "AI Detection Accuracy" },
    { featureTitle: "500+", featureName: "Enterprise Clients" },
    { featureTitle: ">100ms", featureName: "Alert Response Time" },
  ];
  return (
    <Section variant="gray" section="stat" id={"Stat"}>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} textAlign="center">
        {statFeatures.map((feature) => (
          <FeatureItem
            feature={feature}
            fontTitle="4xl"
            fontName="initial"
            padding={5}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Stats;
