// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '.';
import { PrimaryToDoState, ToDoId } from '../features/interfaces';


// create a reducer to fetch all the todos
const fetchAllToDos = createAsyncThunk<PrimaryToDoState>('todos/fetch', async () => {
    try {

        // API to make the request to fetch all notes, (offset based pagination enabled) (default pagination values passed/not required)
        const url = `${API_URL}/todos?limit=0`;
        
        // now, make the request and fetch todos
        const response = await fetch(url);

        // handling non-ok responses
        if (!response.ok) throw new Error('Failed to fetch todos');

        // now, parse the response as json and return the required data type
        const data = await response.json();
        return { todos: data.todos, total: data.total };

    } catch (error) {

        // when encountered errors
        console.error("Error(todos/fetch): ", error);
        throw error;
    }
});


// to delete a single todo
const deleteToDo = createAsyncThunk<ToDoId, ToDoId>('todo/delete', async (id: ToDoId) => {
    try {
        // api to make the delete request
        const url = `${API_URL}/todos/${id}`;

        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // now make the request to delete the todo
        const response = await fetch(url, config);  // is await compulsory here? yes, because we are checking response.ok, so response is important, so await

        // handling non-ok responses
        if (!response.ok) throw new Error('Failed to fetch todos');

        // if this work
        return id;
        
    } catch (error) {
        
        // when encountered errors
        console.error("Error(todos/fetch): ", error);
        throw error;
    }
});


// export all the availbale todos
export { fetchAllToDos, deleteToDo };
