// importing requirements
import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../features/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


// create a store to handle global states
const store = configureStore({
    reducer: {
        todo: ToDoReducer
    }
});


// now export the store, dispatch and selector
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;