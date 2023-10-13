//component
import { Divider, Box, Stack } from "@chakra-ui/react";
import TodoForm from "./TodoForm";
import Filtering from "./Filtering";
import TodosList from "./TodosList";
//hook
import { useReducer } from "react";
//external
import { todoReducer } from "../reducer/reducer";
import { actions } from "../action/action";
import { todoContext } from "../store/TodoContext";
import { v4 as uuid } from "uuid";
export default function TodoWrapper() {
  const [todoState, dispatch] = useReducer(todoReducer, {
    todos: [],
    filterBy: "All",
    sortBy: "ASC",
    searchBy: null,
  });
  const addTodo = (todo) => {
    dispatch({
      payload: {
        ...todoState,
        todos: [...todoState.todos, { id: uuid(), status: true, ...todo }],
      },
      type: actions.ADD_TODO,
    });
  };
  const closeTodo = (id) => {
    const payload = {
      ...todoState,
      todos: todoState.todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, status: false };
        } else return todo;
      }),
    };
    dispatch({
      payload,
      type: actions.CLOSE_TODO,
    });
  };
  const removeTodo = (id) => {
    const payload = {
      ...todoState,
      todos: todoState.todos.filter((todo) => todo.id != id),
    };
    dispatch({
      payload,
      type: actions.CLOSE_TODO,
    });
  };

  const sortTodos = (criteria) => {
    dispatch({
      payload: {
        ...todoState,
        sortBy: criteria,
      },
      type: actions.SORT_TODOS,
    });
  };

  const filterTodos = (criteria) => {
    dispatch({
      payload: {
        ...todoState,
        filterBy: criteria,
      },
      type: actions.FILTER_TODOS,
    });
  };

  const searchTodos = (criteria) => {
    dispatch({
      payload: {
        ...todoState,
        searchBy: criteria,
      },
      type: actions.SEARCH_TODOS,
    });
  };
  return (
    <todoContext.Provider
      value={{
        todos: todoState.todos,
        queriedTodos: todoState.queriedTodos,
        addTodo,
        closeTodo,
        removeTodo,
        sortTodos,
        filterTodos,
        searchTodos,
      }}
    >
      <Box className="w-screen flex  flex-col items-center">
        <Stack w="50%" bg="white" spacing={8}>
          <h1 className=" text-lg">To do tracker</h1>
          <TodoForm />
          <Divider />
          <Filtering />
          <TodosList />
        </Stack>
      </Box>
    </todoContext.Provider>
  );
}
