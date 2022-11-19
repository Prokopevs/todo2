import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
    category: string
}

const initialState: FilterState = {
    category: "All"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
        state.category = action.payload
    }
  },
  
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer