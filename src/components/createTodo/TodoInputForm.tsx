import React from "react"
import { useAppDispatch } from "../../hooks"
import { addTodo, fetchPostItem } from "../../store/redusers/todoSlice"
import { todo } from "../../pictures"

import FileAndDate from "./FileAndDate"

const TodoInputForm: React.FC = () => {
    const [title, setTitle] = React.useState("")
    const [subtitle, setSubtitle] = React.useState("")
    const [dateFinish, setDateFinish] = React.useState("")
    const [filesUrl, setFilesUrl] = React.useState([])
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const dispatch = useAppDispatch()
    console.log(loading)

    /**
     * Функция проверяет корректность ввода данных.
     * Если данных в input нет или неправильно введена дата,
     * то выводится ошибка.
     * Если данные введены корректно, то отправляем данные на
     * сервер.
     */
    const handleAction = () => {
        if (title.trim().length && subtitle.trim().length) {
            if (dateFinish !== "" && dateFinish !== "Invalid Date") {
                const obj = {
                    id: new Date().toISOString(),
                    title: title,
                    subtitle: subtitle,
                    files: filesUrl,
                    finishedDate: dateFinish,
                    completed: false,
                }
                dispatch(fetchPostItem(obj))
                dispatch(addTodo(obj))
                clear()
            } else {
                setError("Invalid date")
            }
        } else {
            setError("Title and subtitle are required")
        }
    }

    /**
     * Функция очищает все поля
     */
    const clear = () => {
        setTitle("")
        setSubtitle("")
        setFilesUrl([])
        setError("")
    }

    return (
        <>
            <div className="form__header">
                <h1 className="form__header_text">Todos</h1>
                <img className="todo__header_img" src={String(todo)}></img>
            </div>

            <div className="form">
                <input
                    className="form__input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    className="form__textarea"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Subtitle"
                />

                <FileAndDate
                    setDateFinish={setDateFinish}
                    setFilesUrl={setFilesUrl}
                    filesUrl={filesUrl}
                    setLoading={setLoading}
                />

                <button
                    className="form__button"
                    onClick={handleAction}
                    disabled={loading}
                >
                    Add todo
                </button>

                {error && <h2 className="form__error">{error}</h2>}
            </div>
        </>
    )
}

export default TodoInputForm
