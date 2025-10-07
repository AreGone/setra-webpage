import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import HeroInfoItem from "./HeroInfoItem";
import CircleDots from "./CircleDots";
import { FeatureItem } from "../ui";

const HeroInfo = () => {
  const heroFeatures = [
    { featureTitle: "24/7", featureName: "Monitoring" },
    { featureTitle: "99.9%", featureName: "Accuacy" },
    { featureTitle: "<1s", featureName: "Response" },
  ];
  const heroInfoItem = [
    {
      color: "green",
      textTitle: "AI Detection: Person Detection",
      textInfo: "99.7%",
    },
    { color: "blue", textTitle: "Motion Analysis: Active", textInfo: "Zone 3" },
    { color: "purple", textTitle: "Threat Level: Low", textInfo: "Normal" },
  ];
  return (
    <Box
      bgGradient="to-br"
      gradientFrom="gray.800"
      gradientTo="blue.800"
      padding={8}
      rounded="xl"
      shadow="2xl"
      flexDirection={"column"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="transform 0.5s ease-in-out"
    >
      <Box
        bg={"black"}
        position="relative"
        mb={6}
        padding={4}
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
          <CircleDots colors={["red.600", "yellow.600", "green.600"]} />
          <Text color="green.400" fontSize="sm" fontFamily="mono">
            LIVE
          </Text>
        </Flex>
        {heroInfoItem.map((info) => (
          <HeroInfoItem
            color={info.color}
            textTitle={info.textTitle}
            textInfo={info.textInfo}
          />
        ))}
        <Box
          position="absolute"
          top={0}
          right={0}
          width="full"
          height={1}
          bgGradient="to-r"
          gradientFrom="blue.600"
          gradientTo="purple.600"
          animation="pulse"
        ></Box>
      </Box>
      <SimpleGrid columns={3} gap={4}>
        {heroFeatures.map((feature) => (
          <FeatureItem
            feature={feature}
            fontName="xs"
            fontTitle="2xl"
            padding="3"
            variant="hero"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroInfo;
