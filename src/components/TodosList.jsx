import { List, ListItem } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
//hook
import { useContext } from "react";
//external
import { todoContext } from "../store/TodoContext";
export default function TodosList() {
  const { todos, sortBy, filterBy, searchBy } = useContext(todoContext);
  console.log("filterby", useContext(todoContext));
  console.log("Recalculate");
  const searchTodos = searchBy
    ? todos.filter((todo) => todo.name.includes(searchBy))
    : todos;
  const filterTodos =
    filterBy == "OPEN"
      ? searchTodos.filter((todo) => todo.status)
      : filterBy == "CLOSE"
      ? searchTodos.filter((todo) => !todo.status)
      : searchTodos;
  const sortTodos =
    sortBy == "ASC"
      ? filterTodos.sort((x, y) => parseInt(x.severity) - parseInt(y.severity))
      : filterTodos.sort((x, y) => parseInt(y.severity) - parseInt(x.severity));
  console.log(searchTodos, filterTodos, sortTodos);
  return (
    <List spacing={3}>
      {sortTodos.length > 0 ? (
        sortTodos.map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem todo={todo} />
          </ListItem>
        ))
      ) : (
        <h2>No item matches!</h2>
      )}
    </List>
  );
}
