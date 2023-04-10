import React from 'react';
import {SourceDocument} from "./Components/SourceDoc/SourceDocument";
import {InputFields} from "./Components/Fields/InputFields";
import {DownloadButton} from "./Components/DownloadButton/DownloadButton";
import {useDocxFile} from "./utils/hook";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const {
        docxFile, changeTexts,
        handleFileDownload, handleFileUpload,
        handleDeletePair, handleAddPair,
        handleChangeText
    } = useDocxFile()

    return (
        <div className={"container h-100 w-100"}>
            <div className={"d-flex flex-column align-items-center justify-content-center"}>
                <SourceDocument handleFileUpload={handleFileUpload} docxFile={docxFile}/>
                <InputFields changeTexts={changeTexts}
                             handleChangeText={handleChangeText}
                             handleAddPair={handleAddPair}
                             handleDeletePair={handleDeletePair}
                />
                <DownloadButton docxFile={docxFile}
                                handleFileDownload={handleFileDownload}
                />
            </div>
        </div>
    )
}

export default App;
