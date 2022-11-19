import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import { storage } from "../firebase"

export const filesUpload = (e: React.ChangeEvent<HTMLInputElement>, setFilesUrl: any) => {
    let selectedFiles = e.target.files
    if (selectedFiles![0] == null) return
    if (selectedFiles) {
        const filesArray = Object.values(selectedFiles)

        filesArray.map((file) => {
            const filesRef = ref(storage, `files/${file.name + v4()}`)
            uploadBytes(filesRef, file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                .then((url) => {
                    setFilesUrl((prevValue: string[]) => [...prevValue, url])
                })
                .catch((error) => {
                    console.log(error.message)
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
        })
    }
}