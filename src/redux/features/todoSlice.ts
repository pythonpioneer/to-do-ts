// importing all requirements
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDo, ToDoState, ToDoId, PrimaryToDoState } from "./interfaces";
import { deleteToDo, fetchAllToDos, addToDo } from "../services/todo.services";


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

        // remove a todo, also decrement the total
        removeToDo: (state, action: PayloadAction<ToDoId>) => {

            // find the todo by the todo id and remove it
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            state.total -= 1;
        },

        // to mark the todo as complete, no api provided, operate locally
        markComplete: (state, action: PayloadAction<ToDoId>) => {

            // find the todo and then mark the complete status as true or false
            state.todos.map(todo => {
                if (todo.id !== action.payload) return todo;
                
                // now, invert the complete status
                const updatedToDo = {
                    ...todo,
                    completed: !todo.completed,
                }

                return updatedToDo;
            })
        }

    },
    extraReducers: builder => {  
        builder
            // to fetch all todos
            .addCase(fetchAllToDos.fulfilled, (state, action: PayloadAction<PrimaryToDoState>) => {

                // set todos to the todos array
                state.todos = action.payload.todos;
                state.total = state.todos.length;
            })

            // to delete the todo
            .addCase(deleteToDo.fulfilled, (state, action: PayloadAction<ToDoId>) => {

                // pass the necessary values to delete the todo
                const id = action.payload;

                // this is also a way!!
                ToDoSlice.caseReducers.removeToDo(state, {
                    payload: id,
                    type: ""
                });
            })

            // to add a new todo
            .addCase(addToDo.fulfilled, (state, action: PayloadAction<ToDo>) => {

                console.log(action.payload)

                // add the todo in the state todo arr
                state.todos = [ action.payload, ...state.todos ];
                state.total += 1;
            })
    }
});


// now, export all the available actions and reducers
export default ToDoSlice.reducer;
export const { 
    removeToDo,
    markComplete
} = ToDoSlice.actions;