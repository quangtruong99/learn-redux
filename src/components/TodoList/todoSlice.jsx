const initState = [
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
]
const todoSliceReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todoList/addTodo' :  
        return [...state,action.payload]
        case 'todoList/toggleTodoStatus' :  
        return state.map(todo => todo.id === action.payload ? {...todo,completed: !todo.completed} : todo)
        default:
            return state
    }
}
export default todoSliceReducer