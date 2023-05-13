import {createSlice} from "@reduxjs/toolkit";


const search = createSlice({
    name: 'Search',
    initialState: {
        value: ''
    },
    reducers: {
        changeValue(state,action) {
            state.value = action.payload
        }
    }
})

export default search.reducer
export const {changeValue} = search.actions