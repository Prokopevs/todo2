import React from "react"
import Filters from "./components/Filters"
import TodoInputForm from "./components/createTodo/TodoInputForm"
import TodoList from "./components/TodoList"
import TotalInfo from "./components/TotalInfo"
import { useAppDispatch } from "./hooks"
import { getData } from "./store/redusers/todoSlice"

function App() {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className="App">
            <div className="container">
                <TodoInputForm />
                <Filters />
                <TodoList />
                <TotalInfo />
            </div>
        </div>
    )
}

export default App
