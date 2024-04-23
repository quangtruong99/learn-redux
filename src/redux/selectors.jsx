import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;

export const remainingTodoList = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritySelector,
    (todoList,searchText,statusSearch,priority) => {
        return todoList.filter((todo)=> {
            if(statusSearch === 'All') {
                return priority.length ?  todo.name.includes(searchText) && priority.includes(todo.prioriry) : todo.name.includes(searchText)
            }
            return todo.name.toLowerCase().trim().includes(searchText.toLowerCase().trim()) && (statusSearch === 'Completed' ? todo.completed : !todo.completed) && (priority.length ? priority.includes(todo.prioriry) : true);
        });
})
