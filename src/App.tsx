import { Box, Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box >
      <NavBar />
      <Container as={"main"} mt={20} backgroundColor={"red"} position={"relative"}>
        <Box backgroundColor={"gold"}>Hero Section</Box>
        <Box backgroundColor={"purple"}>Stats Section</Box>
        <Box backgroundColor={"red"}>AI Feature Section</Box>
        <Box backgroundColor={"blueviolet"}>How it works Section</Box>
        <Box backgroundColor={"lavender"}>Benifit Section</Box>
        <Box backgroundColor={"lightcoral"}>CTA Section</Box>
        <Box backgroundColor={"gray"}>footer</Box>
      </Container>
    </Box>
  );
}

export default App;
