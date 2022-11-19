import axios from "axios"
import { IList } from "../models/IList"

export const getList = async () => {
    const response = await axios.get<IList[]>( 
        "https://635eccd803d2d4d47af65e4d.mockapi.io/toDos" 
    )
    return response
}