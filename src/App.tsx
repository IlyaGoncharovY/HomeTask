import React from 'react';
import {SourceDocument} from "./Components/SourceDoc/SourceDocument";
import {InputFields} from "./Components/Fields/InputFields";
import {DownloadButton} from "./Components/DownloadButton/DownloadButton";
import {useDocxFile} from "./utils/hook";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const {
        changeText1, changeText2,
        docxFile, handleFileUpload,
        handleChange1, handleChange2,
        handleFileDownload
    } = useDocxFile()

    return (
        <div className={"container h-100 w-100"}>
            <div className={"d-flex flex-column align-items-center justify-content-center"}>
                <SourceDocument handleFileUpload={handleFileUpload} docxFile={docxFile}/>
                <InputFields changeText1={changeText1}
                             changeText2={changeText2}
                             handleChange1={handleChange1}
                             handleChange2={handleChange2}
                />
                <DownloadButton docxFile={docxFile}
                                handleFileDownload={handleFileDownload}
                />
            </div>
        </div>
    )
}

export default App;
