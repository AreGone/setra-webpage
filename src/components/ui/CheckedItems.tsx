import { Box, Icon, Text } from "@chakra-ui/react";
import { CircleCheckBig } from "lucide-react";

interface Props {
  text: string;
}

const CheckedItems = ({ text }: Props) => {
  return (
    <Box display="flex" alignItems="center" spaceX={2}>
      <Icon boxSize={4} as={CircleCheckBig} color="#16a34a" />
      <Text>{text}</Text>
    </Box>
  );
};

export default CheckedItems;
