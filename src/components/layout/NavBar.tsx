import { Button, Flex, Group, HStack, Text } from "@chakra-ui/react";

import { Eye } from "lucide-react";
import NavLink from "./NavLink";
import { useColorModeValue } from "../ui/color-mode";

function NavBar() {
  return (
    <Flex
      as={"header"}
      w={"100%"}
      position={"fixed"}
      top={0}
      justifyContent={"space-between"}
      alignContent={"center"}
      py={3}
      px={16}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      backgroundColor={"white"}
      zIndex="50"
    >
      <HStack alignItems="center" spaceX={3}>
        <Eye color="#2563eb" />
        <Text
          fontWeight={"bold"}
          fontSize="2xl"
          bgGradient="to-r"
          gradientFrom="blue.600"
          gradientTo="purple.600"
          bgClip="text"
        >
          Setra
        </Text>
      </HStack>
      <Group
        display={{ base: "none", md: "flex" }}
        spaceX={8}
        alignItems="center"
      >
        <NavLink>AI Features</NavLink>
        <NavLink>How it Works</NavLink>
        <NavLink>Benefits</NavLink>
        <Button
          bgGradient="to-r"
          gradientFrom="blue.600"
          gradientTo="purple.600"
          size="sm"
          rounded="md"
          border="none"
          paddingX={5}
          _hover={{
            transform: "scale(1.03)",
            bgGradient: "to-r",
            gradientFrom: "blue.700",
            gradientTo: "purple.700",
          }}
        >
          Request Demo
        </Button>
      </Group>
    </Flex>
  );
}

export default NavBar;
