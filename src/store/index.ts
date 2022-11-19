import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redusers/todoSlice';
import filterReducer from './redusers/filterSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        todo: todoReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch