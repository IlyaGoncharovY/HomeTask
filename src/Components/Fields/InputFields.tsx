import React, {ChangeEvent, FC} from 'react';
import {ButtonsForFields} from "./BattonsForFields/ButtonsForFields";

interface InputFieldsType {
    changeTexts: { variable: string; valueVariable: string; }[]
    handleChangeText: (index: number, field: "variable" | "valueVariable") => (e: ChangeEvent<HTMLInputElement>) => void
    handleAddPair: () => void
    handleDeletePair: () => void
}

export const InputFields: FC<InputFieldsType> = ({
                                                     changeTexts,
                                                     handleChangeText,
                                                     handleAddPair,
                                                     handleDeletePair
                                                 }) => {

    return (
        <>
            {changeTexts.map((changeText, index) => (
                <div key={index} className="row mb-2">
                    <div className="col-12 col-md-5 mb-2 mb-md-0">
                        <input
                            type="text"
                            value={changeText.variable}
                            onChange={handleChangeText(index, 'variable')}
                            placeholder={"Имя переменной"}
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 col-md-7">
                        <input
                            type="text"
                            value={changeText.valueVariable}
                            onChange={handleChangeText(index, 'valueVariable')}
                            placeholder={"Значение переменной:"}
                            className="form-control"
                        />
                    </div>
                </div>
            ))}
            <ButtonsForFields handleAddPair={handleAddPair}
                              handleDeletePair={handleDeletePair}/>
        </>
    );
};

