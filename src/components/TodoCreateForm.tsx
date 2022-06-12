import React, {FC, useState} from 'react';

interface TodoCreateFormProps {
    addTodo: (todoValue: string) => void
    error: string
}

const TodoCreateForm: FC<TodoCreateFormProps> = ({addTodo, error}) => {
    const [todoValue, setTodoValue] = useState<string>('')

    return (
        <form onSubmit={() => {addTodo(todoValue); setTodoValue('')}} data-testid={'createTodoForm'}>
            <input
                className={'inputCreateTodo'}
                type="text"
                value={todoValue}
                onChange={event => setTodoValue(event.target.value)}
                placeholder={'What needs to be done?'}
            />
            {!error ? null :
                <p className={'error'} >{error}</p>
            }
        </form>
    );
};

export default TodoCreateForm;