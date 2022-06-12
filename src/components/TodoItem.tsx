import React, {FC} from 'react';
import {todo} from "./TodosCard";
import NiceCheckbox from "./ui/niceCheckbox/NiceCheckboxProps";

interface TodoItemProps {
    todo: todo
    swapStatus: (value: string) => void
    id: number
}

const TodoItem: FC<TodoItemProps> = ({todo: {value, status}, swapStatus, id}) => {

    return (
        <div className={`todoItem ${status ? 'completed' : ''}`}>
            <NiceCheckbox checked={status} onChange={() => swapStatus(value)} id={id}/>
            <p>{value}</p>
        </div>
    );
};

export default TodoItem;