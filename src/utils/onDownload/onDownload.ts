// @ts-ignore
import file from "../../Assets/baseWordFile/TestWord2.docx";

export const onDownload = () => {
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