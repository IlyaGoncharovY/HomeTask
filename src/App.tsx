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
        <div className={"container"}>
            <div className={'form-group row'}>
                <SourceDocument handleFileUpload={handleFileUpload} docxFile={docxFile}/>
            </div>
            <div className="form-group row">
                <div className="col-12 mt-2">
                    <InputFields changeTexts={changeTexts}
                                 handleChangeText={handleChangeText}
                                 handleAddPair={handleAddPair}
                                 handleDeletePair={handleDeletePair}
                    />
                </div>

            </div>
            <div className="form-group row">
                <DownloadButton docxFile={docxFile}
                                handleFileDownload={handleFileDownload}
                />
            </div>
        </div>
    )
}

export default App;
