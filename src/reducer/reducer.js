import { actions } from "../action/action";

export const todoReducer = (todoState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TODO:
      return payload;
    case actions.UPDATE_TODO:
      return payload;
    case actions.REMOVE_TODO:
      return payload;
    case actions.CLOSE_TODO:
      return payload;
    case actions.FILTER_TODOS:
      return payload;
    case actions.SEARCH_TODOS:
      return payload;
    case actions.SORT_TODOS:
      return payload;
  }
};
