
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name:'filters',
    initState: {
        search:'',
        status:'All',
        priority: []
    },
    reducers:{
        searchFilterChange: (state, action) => {
            state.search = action.payload
        },
        statusFilterChange: (state,action) => {
            state.status = action.payload
        },
        prioritiesFilterChange: (state,action) => {
            state.priority = action.payload
        }
    }
})
export const { searchFilterChange, statusFilterChange, prioritiesFilterChange} = filtersSlice.actions

export default filtersSlice.reducer