import { getList } from '../../http/getList';
import { AppDispatch } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../models/IList';
import { putList } from '../../http/putList';
import { deleteList } from '../../http/deleteList';
import { postList } from '../../http/postList';

interface FilterState {
    list: IList[]
}

const initialState: FilterState = {
    list: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IList>) {
        state.list.push(action.payload);
    },
    toggleComplete(state, action: PayloadAction<string>) {
        const toggledTodo = state.list.find(todo => todo.id === action.payload)
        if (toggledTodo) {
            toggledTodo.completed = !toggledTodo.completed
        }   
    },
    removeTodo(state, action: PayloadAction<string>) {
        state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    setList(state, action: PayloadAction<IList[]>) {
        state.list = action.payload
    },
    replaceTitle(state, action: PayloadAction<IList>) {
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id)
        if (toggledTodo) {
            toggledTodo.title = action.payload.title
        }   
    },
  },
})

export const getData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await getList()
        dispatch(setList(response.data))
    } catch (error) {
        let errorMessage = "Error"
        if (error instanceof Error) {
            errorMessage = error.message
        }
        console.log(errorMessage)
    }
}

export const fetchChangeItem = (data: IList) => async (dispatch: AppDispatch) => {
    try {
        const response = await putList(data)
    } catch (error) {
        let errorMessage = "Error"
        if (error instanceof Error) {
            errorMessage = error.message
        }
        console.log(errorMessage)
    }
}

export const fetchDeleteItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await deleteList(id)
    } catch (error) {
        let errorMessage = "Error"
        if (error instanceof Error) {
            errorMessage = error.message
        }
        console.log(errorMessage)
    }
}

export const fetchPostItem = (data: IList) => async (dispatch: AppDispatch) => {
    try {
        const response = await postList(data)
    } catch (error) {
        let errorMessage = "Error"
        if (error instanceof Error) {
            errorMessage = error.message
        }
        console.log(errorMessage)
    }
}

export const { addTodo, toggleComplete, removeTodo, setList, replaceTitle } = todoSlice.actions

export default todoSlice.reducer