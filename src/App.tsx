import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/todoModel';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string | number>("");
  const [toDos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo)
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }])
    setToDo("");
  };
  console.log(toDos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}

export default App;
