import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('mock todo rendered', () => {
    render(<App />)
    const todo = screen.getByText(/покрытие тестами/i)
    expect(todo).toBeInTheDocument()
  });

  //Тесты никогда не писал, и по сути не умею, но за пару часов изучил документацию, вроде не сложно)) понимаю что тут просто и тестировать то нечего
  test('add todo and handle duplicate', () => {
    render(<App />)
    const testLorem = 'qwerty'
    const input = screen.getByPlaceholderText('What needs to be done?')
    expect(input).toBeInTheDocument()

    const todo = screen.queryByText(testLorem)
    expect(todo).toBeNull()

    const injectLorem = () => {
      fireEvent.change(input, {target: {value: testLorem}})
      fireEvent.submit(screen.getByTestId('createTodoForm'))
    }

    injectLorem()
    expect(screen.getByText(testLorem)).toBeInTheDocument()

    injectLorem()
    expect(screen.getByText(/уже есть в списке/i)).toBeInTheDocument()
  })
})


