import React from "react"
import { useAppDispatch } from "../hooks"
import { addTodo, fetchPostItem } from "../store/redusers/todoSlice"
import { file, fileG, todo } from "../pictures"
import dayjs from "dayjs"

const TodoInputForm: React.FC = () => {
    const [title, setTitle] = React.useState("")
    const [subtitle, setSubtitle] = React.useState("")
    const [dateFinish, setDateFinish] = React.useState("")
    const [minDate, setMinDate] = React.useState("")

    const filePicker = React.useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        const date = new Date()
        const newDate = dayjs(date.setDate(date.getDate() + 1)).format("YYYY-MM-DD")
        setMinDate(newDate)
    }, [])

    const handleAction = () => {
        // if (text.trim().length) {
        //     const obj = {
        //         text: text,
        //         id: new Date().toISOString(),
        //         completed: false,
        //     }
        //     dispatch(fetchPostItem(obj))
        //     dispatch(addTodo(obj))
        //     setText("")
        // }
    }

    const handlePick = () => {
        filePicker.current!.click()
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

                <div className="form__inner">
                    <input
                        className="form__input date"
                        type="date"
                        min={minDate}
                        onChange={(e) => setDateFinish(e.target.value)}
                    />
                    <div>
                        <input
                            className="form__input file"
                            type="file"
                            ref={filePicker}
                        />
                        <img
                            className="form__inner_img"
                            src={String(file)}
                            onClick={handlePick}
                        ></img>
                    </div>
                </div>

                {/* <button className="form__button" onClick={handleAction}>
                    Add todo
                </button> */}
            </div>
        </>
    )
}

export default TodoInputForm
