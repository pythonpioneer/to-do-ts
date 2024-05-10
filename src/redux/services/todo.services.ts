// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '.';
import { PrimaryToDoState } from '../features/interfaces';


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


// export all the availbale todos
export { fetchAllToDos };
