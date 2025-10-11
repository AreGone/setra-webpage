import { Box } from "@chakra-ui/react";

interface Props {
  size: number; 
  bg: string;
  varient: "nav" | "simple";
}

const CirclePulse = ({ size, bg, varient }: Props) => {
  const rest =
    varient === "nav" ? { position: "absolute", top: -1, right: -2 } : {};
  return (
    <Box
      w={size}
      h={size}
      bg={`${bg}.500`}
      rounded="full"
      animation="pulse"
      {...rest}
    ></Box>
  );
};

export default CirclePulse;
