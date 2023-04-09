import React, {FC} from 'react';

interface InputFieldsType {
    changeText1: string
    changeText2: string
    handleChange1: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleChange2: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFields: FC<InputFieldsType> = ({
                                                     changeText1,
                                                     changeText2,
                                                     handleChange1,
                                                     handleChange2
                                                 }) => {

    return (
        <div className="mt-5 row">
            <div className="col-12 col-md-6">
                <input type="text" value={changeText1} onChange={handleChange1} className="form-control" placeholder="Имя переменной:" />
            </div>
            <div className="col-12 col-md-6 mt-3 mt-md-0">
                <input type="text" value={changeText2} onChange={handleChange2} className="form-control" placeholder="Значение переменной:" />
            </div>
            {/*<ButtonsForFields/>*/}
        </div>
    );
};

