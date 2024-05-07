
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export default todoSliceReducer
const todosSlice = createSlice({
    name:'todoList',
    initialState: {status:'idle',todo:[]},
    reducers:{
        addTodo:(state,action) => {
            state.push(action.payload);
        },
        toggleTodoStatus:(state,action) => {
            const currentTodo = state.find(todo => todo.id === action.payload )
            if(currentTodo) {
                currentTodo.completed = !currentTodo.completed 
            }
        }
    },
    extraReducers:builder => {
        builder.addCase(fetchTodos.pending,(state,action) =>{
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled,(state,action) => {
            console.log(action);
            state.todos = action.payload;
            state.status = 'idle'
        })
    }
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    console.log(res);
    const data = await res.json();
    console.log({data});
    return data.todos
})

export const { addTodo, toggleTodoStatus } = todosSlice.actions
export default todosSlice.reducer