import { useAppDispatch, useAppSelector } from "../hooks"
import { changeFilter } from "../store/redusers/filterSlice"

const Filters = () => {
    const dispatch = useAppDispatch()
    const { category } = useAppSelector((state) => state.filter)
    const categoryArr = ["All", "Completed", "Active"]

    return (
        <div className="filter">
            {categoryArr.map((item, index) => (
                <div
                    key={item + index}
                    className={
                        category === item ? "filter__inner active" : "filter__inner"
                    }
                >
                    <p
                        className="filter__inner_text"
                        onClick={() => dispatch(changeFilter(item))}
                    >
                        {item}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Filters
