import { getList } from '../../http/getList';
import { AppDispatch } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../models/IList';
import { putList } from '../../http/putList';
import { deleteList } from '../../http/deleteList';
import { postList } from '../../http/postList';

interface FilterState {
    list: IList[]
    loading: boolean
}

const initialState: FilterState = {
    list: [],
    loading: false
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
    setLoading(state, action: PayloadAction<boolean>) { 
        state.loading = action.payload
    }
  },
})

export const getData = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await getList()
        dispatch(setList(response.data))
    } catch (error) {
        errorHandler(error)
    } finally {
        dispatch(setLoading(false))
    }
}

export const fetchChangeItem = (data: IList) => async (dispatch: AppDispatch) => {
    try {
        const response = await putList(data)
    } catch (error) {
        errorHandler(error)
    }
}

export const fetchDeleteItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await deleteList(id)
    } catch (error) {
        errorHandler(error)
    }
}

export const fetchPostItem = (data: IList) => async (dispatch: AppDispatch) => {
    try {
        const response = await postList(data)
    } catch (error) {
        errorHandler(error)
    }
}

const errorHandler = (error: unknown) => {
    let errorMessage = "Error"
        if (error instanceof Error) {
            errorMessage = error.message
        }
    console.log(errorMessage)
}

export const { addTodo, toggleComplete, removeTodo, setList, replaceTitle, setLoading } = todoSlice.actions

export default todoSlice.reducer