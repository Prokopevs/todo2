import axios from "axios"
import { IList } from "../models/IList"

export const putList = async (data: IList) => {
    const response = await axios.put( 
        `https://635eccd803d2d4d47af65e4d.mockapi.io/toDos/${data.id}`, {...data} 
    )
    return response
}