import React from 'react';
import './App.css';
import './styles/style.css'
import TodosCard from "./components/TodosCard";

function App() {
  return (
    <div className="App">
        <h1>todos</h1>
        <TodosCard/>
    </div>
  );
}

export default App;
