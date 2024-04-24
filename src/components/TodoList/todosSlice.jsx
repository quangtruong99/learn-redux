
import { createSlice } from "@reduxjs/toolkit";

// export default todoSliceReducer
const todosSlice = createSlice({
    name:'todoList',
    initialState: [
        {
            id:1,
            name:'Learn redux',
            completed:false,
            prioriry:'Medium'
        },
        {
            id:2,
            name:'Learn react',
            completed:true,
            prioriry:'High'
        },
        {
            id:3,
            name:'Learn angular',
            completed:false,
            prioriry:'Low'
        }
    ],
    reducers:{
        addTodo:(state,action) => {
            console.log(1212);
            state.push(action.payload);
        },
        toggleTodoStatus:(state,action) => {
            const currentTodo = state.find(todo => todo.id === action.payload )
            if(currentTodo) {
                currentTodo.completed = !currentTodo.completed 
            }
        }
    }
})
export const { addTodo, toggleTodoStatus } = todosSlice.actions
export default todosSlice.reducer