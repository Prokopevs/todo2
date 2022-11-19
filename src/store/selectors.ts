import { createSelector } from '@reduxjs/toolkit';
import { IList } from '../models/IList';

export const selectAllTodos = (state: { todo: { list: IList[] } }) => state.todo.list
export const selectActiveFilter = (state: { filter: { category: string } }) => state.filter.category

export const selectTodosByFilter = createSelector(
    [selectAllTodos, selectActiveFilter],
    (allTodos, activeFilter) => {
        if (activeFilter === 'All') return allTodos;
    
        if (activeFilter === 'Completed') {
            return allTodos.filter(todo => todo.completed)
        }

        return allTodos.filter(todo => !todo.completed);
    },
)
