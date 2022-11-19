import React from "react"
import { useAppDispatch } from "../hooks"
import { IList } from "../models/IList"
import {
    fetchDeleteItem,
    fetchChangeCompleted,
    removeTodo,
    toggleComplete,
} from "../store/redusers/todoSlice"
import { close } from "../pictures"

const TodoItem: React.FC<IList> = ({ id, text, completed }) => {
    const dispatch = useAppDispatch()
    const handleComplete = () => {
        const data = {
            text: text,
            completed: !completed,
            id: id,
        }
        dispatch(fetchChangeCompleted(data))
        dispatch(toggleComplete(id))
    }

    const handleDelete = () => {
        dispatch(fetchDeleteItem(id))
        dispatch(removeTodo(id))
    }

    return (
        <div className="todo__item">
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    id={id}
                    onChange={() => handleComplete()}
                />
                <label htmlFor={id}>
                    <div>
                        <i className="fa fa-check"></i>
                    </div>
                </label>
            </div>

            <p className={completed ? "todo__item_text completed" : "todo__item_text"}>
                {text}
            </p>

            <img
                className="todo__item_img"
                src={String(close)}
                onClick={() => handleDelete()}
            ></img>
        </div>
    )
}

export default TodoItem
