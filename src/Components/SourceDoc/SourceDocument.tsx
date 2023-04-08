import React from 'react';
import {useDocxFile} from "../../utils/hook";

export const SourceDocument = () => {

    const {
        changeText1, changeText2,
        docxFile, handleFileUpload,
        handleChange1, handleChange2,
        handleFileDownload
    } = useDocxFile()

    return (
        <div>
            <div>
                <input type="file" accept={".docx"} onChange={handleFileUpload}/>
                <label>
                    Имя переменной:
                    <input type="text" value={changeText1} onChange={handleChange1}/>
                </label>
                <label>
                    Значение переменной:
                    <input type="text" value={changeText2} onChange={handleChange2}/>
                </label>
                <button onClick={handleFileDownload} disabled={!docxFile}>Download modified file</button>
            </div>
        </div>
    );
};

