import React from "react"
import { useAppDispatch } from "../hooks"
import { IList } from "../models/IList"
import {
    fetchDeleteItem,
    fetchChangeItem,
    removeTodo,
    toggleComplete,
    replaceTitle,
} from "../store/redusers/todoSlice"
import { close } from "../pictures"
import dayjs from "dayjs"

const TodoItem: React.FC<IList> = (props) => {
    const dispatch = useAppDispatch()
    const { id, title, subtitle, files, finishedDate, completed } = props
    const [editTitle, setEditTitle] = React.useState(title)
    const [changeTitle, setChangeTitle] = React.useState(false)

    /**
     * Функция для изменения поля completed
     */
    const handleComplete = () => {
        const data = {
            ...props,
            completed: !completed,
        }
        dispatch(fetchChangeItem(data))
        dispatch(toggleComplete(id))
    }

    /**
     * Функция для удаления задачи
     */
    const handleDelete = () => {
        dispatch(fetchDeleteItem(id))
        dispatch(removeTodo(id))
    }

    /**
     * Функция для изменения заголовка задачи
     */
    const handleChangeTitle = () => {
        if (title !== editTitle) {
            const data = {
                ...props,
                title: editTitle,
            }
            dispatch(fetchChangeItem(data))
            dispatch(replaceTitle(data))
        }
        setChangeTitle(false)
    }

    const date = new Date()
    const DateNow = dayjs(date).format("YYYY-MM-DD")
    const checkCompletedOverdue = completed ? "todo__item green" : "todo__item red"
    const checkCompletedActual = completed ? "todo__item green" : "todo__item"
    const checkDate =
        DateNow > finishedDate ? checkCompletedOverdue : checkCompletedActual
    
    return (
        <div className={checkDate}>
            <div className="todo__item_inner">
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

                {changeTitle ? (
                    <>
                        <input
                            value={editTitle}
                            className="todo__item_inner_input"
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <button
                            className="todo__item_inner_button"
                            onClick={() => handleChangeTitle()}
                        >
                            Save
                        </button>
                    </>
                ) : (
                    <p
                        className={
                            completed ? "todo__item_text completed" : "todo__item_text"
                        }
                        onDoubleClick={() => setChangeTitle(true)}
                    >
                        {title}
                    </p>
                )}

                <img
                    className="todo__item_img"
                    src={String(close)}
                    onClick={() => handleDelete()}
                ></img>
            </div>

            <p className="todo__item_subtitle">{subtitle}</p>

            <div className="todo__item_files">
                <div>
                    {files.length !== 0 && (
                        <p className="todo__item_files_text">Files:</p>
                    )}
                    <ul>
                        {files.map((item, index) => (
                            <li className="todo__item_files_item" key={item}>
                                <a download className="todo__item_files_link" href={item}>
                                    {index + 1} file
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p
                    className={
                        DateNow > finishedDate
                            ? completed
                                ? "todo__item_files_date green"
                                : "todo__item_files_date red"
                            : "todo__item_files_date green"
                    }
                >
                    Active until: {dayjs(finishedDate).format("DD-MM-YYYY")}
                </p>
            </div>
        </div>
    )
}

export default TodoItem
