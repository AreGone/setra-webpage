import { Box, Heading, Table, Text, Icon } from "@chakra-ui/react";
import { FocusIcon, ScanEye } from "lucide-react";

const BenefitInfo = () => {
  return (
    <Box bgImage="gradientBluePurple_toBr_50" padding={8} rounded="xl">
      <Heading
        as="h4"
        fontSize={{ base: "2xl", md: "xl" }}
        fontWeight="bold"
        color="gray.900"
        mb={3}
        letterSpacing="tight"
      >
        AI Detection Dashboard
      </Heading>
      <Text
        display={{ base: "none", md: "block" }}
        color="gray.600"
        mb={6}
        fontSize="md"
      >
        Monitor real-time security alerts and detections
      </Text>
      <Box
        bg="white"
        position="relative"
        mb={6}
        padding={6}
        shadow="xl"
        rounded="xl"
        overflow={{base:"scroll",md:"hidden"}}
        borderColor="gray.100"
        transition="all 0.3s ease"
        _hover={{
          shadow: "2xl",
          transform: "translateY(-2px)",
        }}
      >
        <Table.Root size="sm" variant="outline" rounded="lg">
          <Table.Header bg="green.800">
            <Table.Row>
              <Table.ColumnHeader
                color="white"
                roundedTopLeft="lg"
                fontSize="sm"
                fontWeight="semibold"
              >
                #
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="white"
                fontSize="sm"
                fontWeight="semibold"
              >
                Image
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="white"
                fontSize="sm"
                fontWeight="semibold"
              >
                Name
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="white"
                fontSize="sm"
                fontWeight="semibold"
              >
                Description
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="white"
                fontSize="sm"
                fontWeight="semibold"
              >
                Type
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="white"
                fontSize="sm"
                fontWeight="semibold"
                roundedTopRight="lg"
              >
                Timestamp
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row
              transition="all 0.2s ease"
              _hover={{ bg: "green.50", transform: "scale(1.01)" }}
            >
              <Table.Cell fontSize="sm" fontWeight="medium">
                1
              </Table.Cell>
              <Table.Cell>
                <Box
                  bg="blue.100"
                  p={3}
                  rounded="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FocusIcon} boxSize={6} color="blue.600" />
                </Box>
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                Motion Detection Alert
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                motion detected on Dahua 3
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                Motion Detection
              </Table.Cell>
              <Table.Cell fontSize="xm" fontWeight="medium">
                11:32:11, 1404/07/30
              </Table.Cell>
            </Table.Row>
            <Table.Row
              transition="all 0.2s ease"
              _hover={{ bg: "green.50", transform: "scale(1.01)" }}
            >
              <Table.Cell fontSize="sm" fontWeight="medium">
                2
              </Table.Cell>
              <Table.Cell>
                <Box
                  bg="purple.100"
                  p={3}
                  rounded="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={ScanEye} boxSize={6} color="purple.600" />
                </Box>
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                Object Detection Alert
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                person detected on Dahua 3
              </Table.Cell>
              <Table.Cell fontSize="sm" fontWeight="medium">
                Object Detection
              </Table.Cell>
              <Table.Cell fontSize="xm" fontWeight="medium">
                11:31:00, 1404/07/30
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default BenefitInfo;
