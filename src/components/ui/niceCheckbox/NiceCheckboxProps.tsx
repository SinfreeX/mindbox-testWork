import React, {FC} from 'react';
import css from './NiceCheckbox.module.css'

interface NiceCheckboxProps {
    id: string
}

//Типизацию еще плохо понимаю, незнаю как правильно указать тип для пропс, пэтому эни
const NiceCheckbox:FC<NiceCheckboxProps | any> = ({id, ...props}) => {
    return (
        <>
            <input className={css.input} type="checkbox" id={'cbx'+id} {...props} />
            <label htmlFor={'cbx'+id} className={css.check}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"/>
                    <polyline points="1 9 7 14 15 4"/>
                </svg>
            </label>
        </>
    );
};

export default NiceCheckbox;