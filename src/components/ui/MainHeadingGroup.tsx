import { Box,Text } from "@chakra-ui/react";
import MainHeading from "./MainHeading";

interface Props {
  heading: string;
  text: string;
}

const MainHeadingGroup = ({ heading, text }: Props) => {
  return (
    <Box textAlign="center">
      <MainHeading heading={heading} />
      <Text
        fontSize="xl"
        color="gray.700"
        maxWidth="4xl"
        mx="auto"
        
      >
        {text}
      </Text>
    </Box>
  );
};

export default MainHeadingGroup;
