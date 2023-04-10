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
                <div key={index} className="mt-5 row">
                    <div className="col-12 col-md-6">
                        <input
                            type="text"
                            value={changeText.variable}
                            onChange={handleChangeText(index, 'variable')}
                            placeholder={"Имя переменной"}
                        />
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                        <input
                            type="text"
                            value={changeText.valueVariable}
                            onChange={handleChangeText(index, 'valueVariable')}
                            placeholder={"Значение переменной:"}
                        />
                    </div>
                </div>
            ))}
            <ButtonsForFields handleAddPair={handleAddPair}
                              handleDeletePair={handleDeletePair}/>
        </>
    );
};

