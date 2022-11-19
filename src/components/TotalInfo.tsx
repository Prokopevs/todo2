import React from "react"
import { useAppSelector } from "../hooks"

const TotalInfo = () => {
    const count = useAppSelector(
        (state) => state.todo.list.filter((item) => item.completed === false).length
    )
    return (
        <div className="total__info">
            <div className="total__info_line"></div>
            <div className="total__info_text">
                <p>Todos left: {count}</p>
            </div>
        </div>
    )
}

export default TotalInfo
