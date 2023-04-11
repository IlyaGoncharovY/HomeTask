import React, {FC} from 'react';
import {onDownload} from "../../utils/onDownload/onDownload";


interface DownloadButtonType {
    docxFile: File | null
    handleFileDownload: () => void

}

export const DownloadButton: FC<DownloadButtonType> = ({docxFile, handleFileDownload}) => {

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

