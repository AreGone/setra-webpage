import { Box, Text } from "@chakra-ui/react";

interface Feature {
  featureTitle: string;
  featureName: string;
}
interface Props {
  feature: Feature;
  fontTitle: string;
  fontName: string;
  padding?: string | number;
  variant?: "hero" | "simple";
}

const FeatureItem = ({
  feature,
  fontTitle,
  fontName,
  padding,
  variant = "simple",
}: Props) => {
  return (
    <Box
      textAlign="center"
      p={padding}
      bg={variant === "hero" ? "whiteAlpha.100" : "transparent"}
      rounded={variant === "hero" ? "lg" : undefined}
      key={feature.featureTitle}
    >
      <Text fontSize={fontTitle} fontWeight={"bold"} color="white">
        {feature.featureTitle}
      </Text>
      <Text fontSize={fontName} color="gray.300">
        {feature.featureName}
      </Text>
    </Box>
  );
};

export default FeatureItem;
