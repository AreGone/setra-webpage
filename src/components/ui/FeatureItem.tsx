import { Box, Text } from "@chakra-ui/react";

interface Feature {
  featureTitle: string;
  featureText: string;
  colorTitle?: string;
}
interface Props {
  feature: Feature;
  fontTitle: string;
  fontName: string;
  padding: string | number;
  bg?: string;
  rounded?: string;
  colorText?: string;
  shadow?: string;
}

const FeatureItem = ({
  feature,
  fontTitle,
  fontName,
  padding,
  bg="transparent",
  rounded="undefiend",
  colorText="gray.300",
  shadow=undefined
  
}: Props) => {
  return (
    <Box
      textAlign="center"
      p={padding}
      bg={bg}
      rounded={rounded}
      shadow={shadow}
      key={feature.featureTitle}
    >
      <Text fontSize={fontTitle} fontWeight={"bold"} color={feature.colorTitle || "white"}>
        {feature.featureTitle}
      </Text>
      <Text fontSize={fontName} color={colorText}>
        {feature.featureText}
      </Text>
    </Box>
  );
};

export default FeatureItem;
