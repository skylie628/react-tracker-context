import { createContext } from "react";
const initialValue = {
  todos: [],
  filterBy: "All",
  sortBy: "ASC",
  searchBy: null,
};
export const todoContext = createContext(initialValue);
