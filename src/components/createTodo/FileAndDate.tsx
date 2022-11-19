import React from "react"
import { file, fileG } from "../../pictures"
import dayjs from "dayjs"
import { filesUpload } from "../../http/postFiles"

interface IFileAndDate {
    setDateFinish: (...args: string[]) => void
    setFilesUrl: any
    filesUrl: string[]
}

const FileAndDate: React.FC<IFileAndDate> = ({
    setDateFinish,
    setFilesUrl,
    filesUrl,
}) => {
    const filePicker = React.useRef<HTMLInputElement>(null)
    const [minDate, setMinDate] = React.useState("")

    React.useEffect(() => {
        const date = new Date()
        const newDate = dayjs(date).format("YYYY-MM-DD")
        setMinDate(newDate)
    }, [])

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
                    onChange={(e) => filesUpload(e, setFilesUrl)}
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
