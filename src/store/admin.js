import {createSlice} from "@reduxjs/toolkit";


const admin = createSlice({
    name : 'admin',
    initialState: {
        pass: '1787'
    }
})

export default admin.reducer