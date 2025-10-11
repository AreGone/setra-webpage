import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import HeroInfoItem from "./HeroInfoItem";
import CircleDots from "./CircleDots";
import { FeatureItem } from "../ui";
import { heroFeatures, heroInfoItem } from "./heroData";

const HeroInfo = () => {
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
            rounded="lg"
            bg="whiteAlpha.100"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeroInfo;
