import React, {useMemo, useState} from 'react';
import TodoItem from "./TodoItem";
import TodoCreateForm from "./TodoCreateForm";

type status = 'all' | 'active' | 'completed'

export interface todo {
    value: string
    status: boolean
}

const mockTodos: todo[] = [
    { value: 'Тестовое задание', status: true },
    { value: 'Прекрасный код', status: true },
    { value: 'Покрытие тестами', status: false }
]

const TodosCard = () => {
    const [todos, setTodos] = useState<todo[]>(mockTodos)
    const [filterType, setFilterType] = useState<status>('all')
    const [error, setError] = useState<string>('')

    const todosFiltered = useMemo(() => (
         filterType === 'all' ? todos 
             : todos.filter((todo) => filterType === 'completed' ? todo.status : !todo.status )
    ), [filterType, todos])
    
    const todoActiveNum = useMemo(() => (
        todos.filter((todo) => !todo.status).length
    ), [todos])

    const filterSelector = (type: string) => (
        filterType === type ? {className: 'selected'} : null
    )

    const clearCompleted = () => {
        setTodos((todos) =>
            todos.filter((todo) => !todo.status)
        )
    }

    const addTodo = (value: string) => {
        if (!todos.find((todo) => todo.value === value)){
            setTodos((todos: any) => [...todos, {value: value, status: false}])
            setError('')
        }
        else
            setError(`Задача ${value} уже есть в списке`)
        return false
    }

    const swapTodoStatus = (value: string) => {
        setTodos((todos) =>
            (todos.map((todo) =>
                (todo.value === value ? {value, status: !todo.status} : todo)
            ))
        )
    }

    return (
        <div className={'card'}>
            <div className={'addTodo'}>
                <TodoCreateForm addTodo={addTodo} error={error}/>
            </div>
            <div className={'todolist'}>
                {!todosFiltered.length ? <p>Ты еще ничего не сделал :(</p>
                        : todosFiltered.map((todo, index) => (
                            <TodoItem key={todo.value} todo={todo} swapStatus={swapTodoStatus} id={index}/> // Знаю, нельзя использовать индекс в качестве ключа, но ничего лучше пока не придумал
                ))}
            </div>
            <div className={'todoFooter'}>
                <div>
                    <p>{todoActiveNum} items left</p>
                </div>
                <div className={'filter'}>
                    <a {...filterSelector('all')} onClick={() => setFilterType('all')} href="#">All</a>
                    <a {...filterSelector('active')} onClick={() => setFilterType('active')} href="#">Active</a>
                    <a {...filterSelector('completed')} onClick={() => setFilterType('completed')} href="#">Completed</a>
                </div>
                <div>
                    <a onClick={clearCompleted} href="#">Clear completed</a>
                </div>
            </div>
        </div>
    );
};

export default TodosCard;