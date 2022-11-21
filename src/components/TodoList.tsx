import React from "react"
import { useAppSelector } from "../hooks"
import { selectTodosByFilter } from "../store/selectors"
import TodoItem from "./TodoItem"

const TodoList: React.FC = () => {
    const todos = useAppSelector(selectTodosByFilter)
    return (
        <div className="list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    )
}

export default TodoList
