import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filtersSlice";
import todosReducer from "../components/TodoList/todosSlice";

export const rootReducer = combineReducers({
    filters:filtersReducer,
    todoList:todosReducer
})