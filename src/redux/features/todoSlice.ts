// importing all requirements
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo, ToDoState } from "./interfaces";


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

        // adding a new todo on the top of other todos, also increment the total.
        addToDo: (state, action: PayloadAction<ToDo>) => {
            state.todos = [ action.payload, ...state.todos ];
            state.total += 1;
        },

        // remove a todo, also decrement the total
        removeToDo: (state, action: PayloadAction<number>) => {
            
        }
    },
    extraReducers: builder => {  

    }
});


// now, export all the available actions and reducers
export const {} = ToDoSlice.actions;
export default ToDoSlice.reducer;