import React from 'react';
import {ButtonsForFields} from "./BattonsForFields/ButtonsForFields";

export const InputFields = () => {
    return (
        <div>
            <input placeholder={"Переменная"}/>
            <input placeholder={"Значение"}/>
            <ButtonsForFields/>
        </div>
    );
};

