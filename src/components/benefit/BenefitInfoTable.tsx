import { Box, Table, Icon } from "@chakra-ui/react";
import { FocusIcon, ScanEye } from "lucide-react";

const BenefitInfoTable = () => {
  return (
    <Table.Root fontFamily="sans-serif" size={{base:"sm",md:"md"}} variant="outline" rounded="lg">
      <Table.Header bg="green.800">
        <Table.Row>
          <Table.ColumnHeader
            color="white"
            roundedTopLeft="lg"
            fontSize="sm"
            fontWeight="bold"
          >
            #
          </Table.ColumnHeader>
          <Table.ColumnHeader color="white" fontSize="sm" fontWeight="bold">
            Image
          </Table.ColumnHeader>
          <Table.ColumnHeader color="white" fontSize="sm" fontWeight="bold">
            Name
          </Table.ColumnHeader>
          <Table.ColumnHeader color="white" fontSize="sm" fontWeight="bold">
            Description
          </Table.ColumnHeader>
          <Table.ColumnHeader color="white" fontSize="sm" fontWeight="bold">
            Type
          </Table.ColumnHeader>
          <Table.ColumnHeader
            color="white"
            fontSize="sm"
            fontWeight="bold"
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
              <Icon as={FocusIcon} boxSize={5} color="blue.600" />
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
              <Icon as={ScanEye} boxSize={5} color="purple.600" />
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
  );
};

export default BenefitInfoTable;
