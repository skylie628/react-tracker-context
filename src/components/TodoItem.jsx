import {
  Card,
  CardBody,
  Text,
  Heading,
  Divider,
  CardFooter,
  Stack,
  ButtonGroup,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import FlatButton from "./FlatButton";
import { useContext } from "react";
import { todoContext } from "../store/TodoContext";
import { MdPriorityHigh } from "react-icons/md";
export default function TodosItem({ todo }) {
  const { closeTodo, removeTodo } = useContext(todoContext);
  return (
    <Card>
      <CardBody>
        <Stack spacing="3" textAlign={["left"]}>
          <Heading size="md">{todo.id}</Heading>
          <Divider />
          <Text>{todo.name}</Text>
          <Tag
            className="mr-auto"
            size="5px"
            variant="subtle"
            colorScheme="gray"
          >
            <TagLeftIcon boxSize="12px" as={MdPriorityHigh} />
            <TagLabel>
              {todo.severity == "0"
                ? "Low"
                : todo.severity == "1"
                ? "Medium"
                : "High"}
            </TagLabel>
          </Tag>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2" className="ml-auto">
          {todo.status && (
            <FlatButton
              variant="solid"
              active="true"
              colorScheme="blue"
              onClick={() => closeTodo(todo.id)}
            >
              Close
            </FlatButton>
          )}
          <FlatButton onClick={() => removeTodo(todo.id)}>Delete</FlatButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
