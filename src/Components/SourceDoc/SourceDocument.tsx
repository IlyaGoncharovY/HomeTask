import React, { ChangeEvent, useState } from 'react';
import * as PizZip from 'pizzip';
import * as docxtemplater from 'docxtemplater';

export const SourceDocument = () => {
    const [docxFile, setDocxFile] = useState<File | null>(null);
    const [changeText1, setChangeText1] = useState('');
    const [changeText2, setChangeText2] = useState('');

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files.length > 0) {
            setDocxFile(event.currentTarget.files[0]);
        }
    };

    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeText1(e.currentTarget.value)
    }

    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeText2(e.currentTarget.value)
    }

    const handleFileDownload = () => {
        if (!docxFile) {
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsBinaryString(docxFile);
        fileReader.onload = () => {
            const zip = new PizZip.default(fileReader.result as string);
            const doc = new docxtemplater.default();
            doc.loadZip(zip);
            doc.setData({
                variable : changeText1,
                valueVariable : changeText2
            });
            doc.render();

            const output = doc.getZip().generate({ type: "blob" });
            const url = URL.createObjectURL(output);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${docxFile.name.split('.')[0]}_modified.docx`;
            link.click();

            const blob = new Blob([output], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

            const modifiedFile = new File([blob], `${docxFile.name.split('.')[0]}_modified.docx`, { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

            setDocxFile(modifiedFile);
        };
    };

    return (
        <div>
            <div>
                <input type="file" accept={".docx"} onChange={handleFileUpload} />
                <label>
                    Имя переменной:
                    <input type="text" value={changeText1} onChange={handleChange1} />
                </label>
                <label>
                    Значение переменной:
                    <input type="text" value={changeText2} onChange={handleChange2} />
                </label>
                <button onClick={handleFileDownload} disabled={!docxFile}>Download modified file</button>
            </div>
        </div>
    );
};

