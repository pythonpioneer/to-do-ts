// importing all requirements
import { createSlice } from "@reduxjs/toolkit";
import { ToDoState } from "./interfaces";


// create the initial global state for the todo
const initialState: ToDoState = {
    todos: [],
    total: 0,
    isLoading: false,
    hasError: false,
}


// now create the slice to define actions and reducers
const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    },
    extraReducers: builder => {  

    }
});


// now, export all the available actions and reducers
export const {} = ToDoSlice.actions;
export default ToDoSlice.reducer;