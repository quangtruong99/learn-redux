import { combineReducers } from "redux";
import filterSliceReducer from "../components/Filters/filterSlice";
import todoSliceReducer from "../components/TodoList/todoSlice";

const rootReducer = combineReducers({
    filters:filterSliceReducer,
    todoList:todoSliceReducer
})
export default rootReducer