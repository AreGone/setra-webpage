import { Box, Heading, Text } from "@chakra-ui/react";
import BenefitInfoTable from "./BenefitInfoTable";

const BenefitInfo = () => {
  return (
    <Box bgImage="gradientBluePurple_toBr_50" padding={8} rounded="xl">
      <Heading
        as="h4"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="gray.900"
        mb={3}
        letterSpacing="tight"
      >
        AI Detection Dashboard
      </Heading>
      <Text
        display={{ base: "none", md: "block" }}
        color="gray.600"
        mb={6}
        fontSize="md"
      >
        Monitor real-time security alerts and detections
      </Text>
      <Box
        bg="white"
        position="relative"
        mb={6}
        padding={6}
        shadow="xl"
        rounded="xl"
        overflow={{base:"scroll",md:"hidden"}}
        borderColor="gray.100"
        transition="all 0.3s ease"
        _hover={{
          shadow: "2xl",
          transform: "translateY(-2px)",
        }}
      >
        <BenefitInfoTable />
      </Box>
    </Box>
  );
};

export default BenefitInfo;
