import {
  Stack,
  Heading,
  Input,
  Select,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Button,
  HStack,
} from "@chakra-ui/react";
//hook
import { useContext } from "react";
//external
import { todoContext } from "../store/TodoContext";
export default function Filtering() {
  const { sortTodos, filterTodos, searchTodos } = useContext(todoContext);

  return (
    <Stack spacing={8}>
      <Flex>
        <Heading size="md">List Todo</Heading>
        <Spacer />
        <Input placeholder="Search by description" w="30%" />
      </Flex>
      <Grid templateColumns="repeat(6, 1fr)" gap={4} rowGap={4}>
        <GridItem textAlign={["left"]} colSpan={2}>
          Filter by
        </GridItem>
        <GridItem colSpan={4}>
          <HStack spacing={3}>
            <Button onClick={() => filterTodos("ALL")}>All</Button>
            <Button onClick={() => filterTodos("OPEN")}>Open</Button>
            <Button onClick={() => filterTodos("CLOSE")}>Close</Button>
          </HStack>
        </GridItem>

        <GridItem textAlign={["left"]} colSpan={2}>
          Sort by
        </GridItem>
        <GridItem colSpan={4}>
          <Select
            id="severity"
            className="w-full"
            onChange={(e) => {
              e.target.value == 0 ? sortTodos("ASC") : sortTodos("DESC");
            }}
          >
            <option defaultChecked value={0}>
              ASC
            </option>
            <option value={1}>DESC</option>
          </Select>
        </GridItem>
      </Grid>
    </Stack>
  );
}
