import {
  Stack,
  Heading,
  Input,
  Select,
  Flex,
  Spacer,
  Grid,
  GridItem,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import FlatButton from "./FlatButton";
//hook
import { useContext, useRef } from "react";
//external
import { todoContext } from "../store/TodoContext";
export default function Filtering() {
  const { sortTodos, filterTodos, searchTodos, searchBy, filterBy } =
    useContext(todoContext);
  const searchRef = useRef();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchTodos(searchRef.current.value);
      searchRef.current.value = "";
    }
  };
  return (
    <Stack spacing={8}>
      <Flex>
        <Heading size="md">List Todo</Heading>
        <Spacer />
        <Input
          ref={searchRef}
          focusBorderColor="black.300"
          errorBorderColor="black.300"
          _hover={{ borderColor: "black.300" }}
          borderColor="black.300"
          border="2px"
          onKeyDown={(e) => handleSearch(e)}
          placeholder="Search by description"
          w="30%"
        />
      </Flex>
      {searchBy && (
        <Tag
          className="mr-auto"
          borderRadius="full"
          variant="solid"
          colorScheme="blackAlpha"
        >
          <TagLabel>
            {
              <span>
                Search results for <b>{searchBy}</b>
              </span>
            }
          </TagLabel>
          <TagCloseButton onClick={() => searchTodos("")} />
        </Tag>
      )}
      <Grid templateColumns="repeat(6, 1fr)" gap={4} rowGap={4}>
        <GridItem textAlign={["left"]} colSpan={2}>
          Filter by
        </GridItem>
        <GridItem colSpan={4}>
          <HStack spacing={3}>
            <FlatButton
              active={filterBy == "ALL"}
              onClick={() => filterTodos("ALL")}
            >
              All
            </FlatButton>
            <FlatButton
              active={filterBy == "OPEN"}
              onClick={() => filterTodos("OPEN")}
            >
              Open
            </FlatButton>
            <FlatButton
              active={filterBy == "CLOSE"}
              onClick={() => filterTodos("CLOSE")}
            >
              Close
            </FlatButton>
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
            focusBorderColor="black.300"
            _hover={{ borderColor: "black.300" }}
            errorBorderColor="black.300"
            borderColor="black.300"
            border="2px"
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
