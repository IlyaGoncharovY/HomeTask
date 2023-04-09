import React, {FC} from 'react';

interface DownloadButtonType {
    docxFile: File | null
    handleFileDownload: () => void

}

export const DownloadButton: FC<DownloadButtonType> = ({docxFile, handleFileDownload}) => {

    return (
        <div className={"mt-5"}>
            <button type="button" className="btn btn-outline-info" onClick={handleFileDownload} disabled={!docxFile}>Скачать изменённый документ</button>
        </div>
    );
};

