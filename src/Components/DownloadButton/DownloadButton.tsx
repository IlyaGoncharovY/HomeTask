import React, {FC} from 'react';
// @ts-ignore
import file from "../../Assets/baseWordFile/TestWord2.docx"


interface DownloadButtonType {
    docxFile: File | null
    handleFileDownload: () => void

}

export const DownloadButton: FC<DownloadButtonType> = ({docxFile, handleFileDownload}) => {

    const onDownload = () => {
        fetch(file).then((response) => {
            response.blob().then((blob) => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url;
                a.download = "testFile.docx";
                a.click();
            });
        });
    };

    return (
        <>
            <div className={"col-12 mt-2 text-end"}>
                <button type="button" className="btn btn-outline-info" onClick={onDownload}>Скачать дефолтный файл</button>
            </div>
            <div className={"col-12 mt-2 text-end"}>
                <button type="button" className="btn btn-success" onClick={handleFileDownload} disabled={!docxFile}>Скачать изменённый документ</button>
            </div>
        </>

    );
};

