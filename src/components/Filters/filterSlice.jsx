const initState = {
    search:'',
    status:'All',
    priority: []
}
const filterSliceReducer = (state = initState, action) => {
    switch(action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state,
                search:action.payload
            }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status:action.payload
            }
        case 'filter/prioritiesFilterChange':
            return {
                ...state,
                priority:action.payload
            }
        default:
            return state
    }
}
export default filterSliceReducer