import axios from "axios"
import { IList } from "../models/IList";

export const deleteList = async (id: string) => {
    const response = await axios.delete( 
        `https://635eccd803d2d4d47af65e4d.mockapi.io/toDos/${id}`)
    return response
};