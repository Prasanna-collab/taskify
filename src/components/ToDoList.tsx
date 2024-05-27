import React from 'react'
import { Todo } from '../models/todoModel';
import "./ToDoList.css";
import ToDo from './ToDo';

interface Props {
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }: Props) => {
    return <div className="todos">
        {toDos.map((todo) => {
            return <>
                <ToDo
                    todo={todo}
                    key={todo.id}
                    toDos={toDos} //to assign the functionality
                    setToDos={setToDos} // to update the state value after the certain action(edit, delete) happens.
                />
            </>
        })}


    </div>
}

export default ToDoList