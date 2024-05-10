// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '.';
import { ToDo, ToDoState } from '../features/interfaces';


// create a reducer to fetch all the todos
export const fetchAllToDos = createAsyncThunk<ToDo[]>('todos/fetch', async () => {
    try {
        // Fetch todos from the API
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        console.log("xxx")
        return data.todos;

    } catch (error) {
        console.error("Error (todos/fetch): ", error);
        throw error; // Rethrow the error to be handled by Redux Toolkit
    }
});

