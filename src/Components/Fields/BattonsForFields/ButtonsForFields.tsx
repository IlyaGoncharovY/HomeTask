import React, {FC} from 'react';

interface ButtonsForFieldsType {
    handleAddPair: () => void
    handleDeletePair: () => void
}

export const ButtonsForFields:FC<ButtonsForFieldsType> = ({handleDeletePair, handleAddPair}) => {

    return (
        <div className="row">
            <div className={"col-12"}>
                <button onClick={handleAddPair} type="button" className="btn btn-outline-info">Добавить пару</button>
                <button onClick={handleDeletePair} type="button" className="btn btn-outline-info">Удалить  пару</button>
            </div>
        </div>
    );
};

