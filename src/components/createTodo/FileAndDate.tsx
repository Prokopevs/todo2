import React, { Dispatch, SetStateAction } from "react"
import { file, fileG } from "../../pictures"
import dayjs from "dayjs"
import { filesUpload } from "../../http/postFiles"

interface IFileAndDate {
    setDateFinish: (...args: string[]) => void
    setFilesUrl: Dispatch<SetStateAction<never[]>>
    filesUrl: string[]
    setLoading: (...args: boolean[]) => void
}

const FileAndDate: React.FC<IFileAndDate> = ({
    setDateFinish,
    setFilesUrl,
    filesUrl,
    setLoading,
}) => {
    const filePicker = React.useRef<HTMLInputElement>(null)
    const [minDate, setMinDate] = React.useState("")

    React.useEffect(() => {
        const date = new Date()
        const newDate = dayjs(date).format("YYYY-MM-DD") // дату преобразуем в формат YYYY-MM-DD.
        setMinDate(newDate) // устанавливаем минимальное число, которое можно будет выбрать.
    }, [])

    /**
     * Функция производит click по input для того, чтобы выбрать файлы
     * которые необходимо прикрепить. 
     */
    const handlePick = () => {
        filePicker.current!.click()
    }

    return (
        <div className="form__inner">
            <input
                className="form__input date"
                type="date"
                min={minDate}
                onChange={(e) =>
                    setDateFinish(dayjs(e.target.value).format("DD-MM-YYYY"))
                }
            />
            <div>
                <input
                    className="form__input file"
                    type="file"
                    ref={filePicker}
                    onChange={(e) => filesUpload(e, setFilesUrl, setLoading)}
                    multiple
                />

                <div className="form__inner_select">
                    <p className="form__inner_select_text">{filesUrl.length} files</p>
                    <img
                        className="form__inner_select_img"
                        src={String(filesUrl.length !== 0 ? fileG : file)}
                        onClick={() => handlePick()}
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default FileAndDate
