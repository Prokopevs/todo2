import React from "react"
import { useAppSelector } from "../hooks"
import { selectTodosByFilter } from "../store/selectors"
import TodoItem from "./TodoItem"
import Loading from "./Loading"

const TodoList: React.FC = () => {
    const todos = useAppSelector(selectTodosByFilter)
    const loading = useAppSelector((state) => state.todo.loading)
    return (
        <>
            {loading ? (
                <div className="list__loading">
                    <Loading />
                </div>
            ) : (
                <div className="list">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} {...todo} />
                    ))}
                </div>
            )}
        </>
    )
}

export default TodoList
