import React, {FC} from 'react';

interface ItemType {
    changeTexts: { variable: string; valueVariable: string; }
}

export const Item: FC<ItemType> = ({changeTexts}) => {
    return (
        <div>
            {`let ${changeTexts.variable} = ${changeTexts.valueVariable}`}
        </div>
    );
};

