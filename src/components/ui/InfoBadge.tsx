import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fontSize: string;
  color: string;
}

const InfoBadge = ({ children, fontSize, color }: Props) => {
  return (
    <Box
      as="span"
      fontSize={fontSize}
      px={2}
      py={1}
      rounded="2xl"
      bg={color + ".100"}
      color={color + ".800"}
      display="flex"
      alignItems="center"
      gap={2}
    >
      {children}
    </Box>
  );
};

export default InfoBadge;
