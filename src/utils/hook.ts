import React, {ChangeEvent, useState} from "react";
import * as PizZip from "pizzip";
import * as docxtemplater from "docxtemplater";

export const useDocxFile = () => {

    const [docxFile, setDocxFile] = useState<File | null>(null);
    const [changeTexts, setChangeTexts] = useState<{ variable: string; valueVariable: string }[]>([
        {variable: '', valueVariable: ''},
    ]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files.length > 0) {
            setDocxFile(event.currentTarget.files[0]);
        }
    };

    const handleChangeText = (index: number, field: keyof typeof changeTexts[0]) => (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newChangeTexts = [...changeTexts];
        newChangeTexts[index][field] = e.currentTarget.value;
        setChangeTexts(newChangeTexts);
    };

    const handleAddPair = () => {
        setChangeTexts([...changeTexts, {variable: '', valueVariable: ''}]);
    };

    const handleDeletePair = () => {
        if (changeTexts.length > 1) {
            const newChangeTexts = [...changeTexts];
            newChangeTexts.pop();
            setChangeTexts(newChangeTexts);
        }
    };

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
            doc.setData(
                {
                    changeTexts: changeTexts.map(({ variable, valueVariable }) => ({
                        variable,
                        valueVariable,
                    })),
                }
            );
            doc.render();

            const output = doc.getZip().generate({type: 'blob'});
            const url = URL.createObjectURL(output);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${docxFile.name.split('.')[0]}_modified.docx`;
            link.click();

            const blob = new Blob([output], {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });

            const modifiedFile = new File([blob], `${docxFile.name.split('.')[0]}_modified.docx`, {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });

            setDocxFile(modifiedFile);
        };
    };

    return {
        docxFile, changeTexts,
        handleFileUpload, handleChangeText,
        handleAddPair, handleDeletePair,
        handleFileDownload
    }
}

