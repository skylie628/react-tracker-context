import {
  Card,
  CardBody,
  Text,
  Heading,
  StackDivider,
  CardFooter,
  Stack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { todoContext } from "../store/TodoContext";
export default function TodosItem({ todo }) {
  const { closeTodo, removeTodo } = useContext(todoContext);
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="3" textAlign={["left"]}>
          <Heading size="md">{todo.id}</Heading>
          <Text>{todo.name}</Text>
          <Text>{todo.severity}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          {todo.status && (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => closeTodo(todo.id)}
            >
              Close
            </Button>
          )}
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
