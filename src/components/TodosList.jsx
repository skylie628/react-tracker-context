import { UnorderedList, ListItem } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
//hook
import { useContext } from "react";
//external
import { todoContext } from "../store/TodoContext";
export default function TodosList() {
  const { todos, sortBy, filterBy, searchBy } = useContext(todoContext);
  console.log("Recalculate");
  let searchTodos = searchBy
    ? todos.filter((todo) => todo.name.includes(searchBy))
    : todos;
  let filterTodos =
    filterBy == "OPEN"
      ? searchTodos.filter((todo) => todo.status)
      : filterBy == "CLOSE"
      ? searchTodos.filter((todo) => !todo.status)
      : searchTodos;
  let sortTodos =
    sortBy == "ASC"
      ? filterTodos.sort((x, y) => parseInt(x.severity) - parseInt(y.severity))
      : filterTodos.sort((x, y) => parseInt(y.severity) - parseInt(x.severity));
  console.log(searchTodos, filterTodos, sortTodos);
  return (
    <UnorderedList spacing={3}>
      {sortTodos.map((todo) => (
        <ListItem key={todo.id}>
          <TodoItem todo={todo} />
        </ListItem>
      ))}
    </UnorderedList>
  );
}
