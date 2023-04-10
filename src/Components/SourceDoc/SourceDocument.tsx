import React, {FC, useRef} from 'react';

interface SourceDocumentType {
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
    docxFile: File | null
}

export const SourceDocument: FC<SourceDocumentType> = ({handleFileUpload, docxFile}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className={'mt-5'}>
            <input
                type="file"
                accept={".docx"}
                onChange={handleFileUpload}
                ref={fileInputRef}
                style={{display: 'none'}}
            />
            <button type="button" className="btn btn-outline-info" onClick={handleClick}>{!docxFile ? "Загрузить файл" : "Файл загружен"}</button>
        </div>
    );
};


