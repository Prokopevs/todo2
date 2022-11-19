import axios from "axios"
import { IList } from "../models/IList";

export const postList = async (data: IList) => {
    const response = await axios.post( 
        "https://635eccd803d2d4d47af65e4d.mockapi.io/toDos", {...data})
    return response
};