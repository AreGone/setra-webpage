import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import type { ElementType } from "react";

interface WorksItem {
  icon: ElementType;
  title: string;
  text: string;
}

interface Prop {
  item: WorksItem;
}

const HowItWorksItem = ({ item }: Prop) => {
  return (
    <Box textAlign="center">
      <Box
        display="inline-flex"
        height={20}
        width={20}
        alignItems="center"
        justifyContent="center"
        rounded="full"
        color="white"
        bgGradient="to-r"
        gradientFrom="blue.600"
        gradientTo="purple.600"
        mb={8}
        mx="auto"
      >
        <Icon as={item.icon} boxSize={8} />
      </Box>

      <Heading as="h3" fontSize="xl" color="gray.900" fontWeight="bold" mb={4}>
        {item.title}
      </Heading>
      <Text fontSize="md" color="gray.700" lineHeight="moderate">
        {item.text}
      </Text>
    </Box>
  );
};

export default HowItWorksItem;
