import React, {FC} from 'react';

interface ButtonsForFieldsType {
    handleAddPair: () => void
    handleDeletePair: () => void
}

export const ButtonsForFields:FC<ButtonsForFieldsType> = ({handleDeletePair, handleAddPair}) => {

    return (
        <div>
            <button onClick={handleAddPair}>Добавить новую пару</button>
            <button onClick={handleDeletePair}>Удалить последнюю пару</button>
        </div>
    );
};

