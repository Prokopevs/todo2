import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import { storage } from "../firebase"

export const filesUpload = (e: React.ChangeEvent<HTMLInputElement>, setFilesUrl: any, setLoading: (...args: boolean[]) => void) => {
    let selectedFiles = e.target.files
    if (selectedFiles![0] == null) return
    if (selectedFiles) {
        const filesArray = Object.values(selectedFiles)
        let count = 0 // счётчик для подсчёта запросов
        setLoading(true)

        filesArray.map((file) => {
            const filesRef = ref(storage, `files/${file.name + v4()}`)
            uploadBytes(filesRef, file) // отправляем файл на Firebase
            .then((snapshot) => {
                getDownloadURL(snapshot.ref) // получаем его url
                .then((url) => {
                    setFilesUrl((prevValue: string[]) => [...prevValue, url])
                    count++
                    if(filesArray.length === count) { // если кол файлов равно счётчику, то значит это последний ответ
                        setLoading(false)
                    } 
                })
                .catch((error) => {
                    console.log(error.message)
                    count++
                    if(filesArray.length === count) { // в случае ошибки всё равно проверить
                        setLoading(false)
                    } 
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
        })
    }
}