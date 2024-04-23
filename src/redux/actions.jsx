
export const addTodos = (data) => {
    return {
        type:'todoList/addTodo',
        payload:data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type:'todoList/toggleTodoStatus',
        payload:todoId
    }
}

export const searchFilter = (text) => {
    return {
        type:'filter/searchFilterChange',
        payload:text
    }
}

export const statusFilter = (value) => {
    return {
        type:'filter/statusFilterChange',
        payload:value
    }
}

export const prioritiesFilter = (priority) => {
    return {
        type:'filter/prioritiesFilterChange',
        payload:priority
    }
}