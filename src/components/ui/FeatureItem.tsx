import type TitleGroup from "@/entities/TitleGroup";
import { Box, Text } from "@chakra-ui/react";

interface Props extends TitleGroup {
  fontTitle: string;
  fontName: string;
  padding: string | number;
  bg?: string;
  rounded?: string;
  colorText?: string;
  shadow?: string;
}

const FeatureItem = ({
  title,
  text,
  color = "white",
  fontTitle,
  fontName,
  padding,
  bg = "transparent",
  rounded = undefined,
  colorText = "gray.300",
  shadow = undefined,
}: Props) => {
  return (
    <Box
      textAlign="center"
      p={padding}
      bg={bg}
      rounded={rounded}
      shadow={shadow}
    >
      <Text fontSize={fontTitle} fontWeight={"bold"} color={color}>
        {title}
      </Text>
      <Text fontSize={fontName} color={colorText}>
        {text}
      </Text>
    </Box>
  );
};

export default FeatureItem;
