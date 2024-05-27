import React from 'react'
import { Todo } from '../models/todoModel'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import "./ToDo.css";

interface Props {
    todo: Todo;
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDo: React.FC<Props> = ({ todo, toDos, setToDos }: Props) => {
    const handleDone = (id: number) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone }:todo))
    };
    return <form className="todos__single">
        <span className="todos__single__text">{todo.todo}</span>
        <div>
            <span className="icon">
                <CiEdit />
            </span>
            <span className="icon">
                <MdDelete />
            </span>
            <span className="icon">
                <IoMdDoneAll onClick={() => handleDone(todo.id)} />
            </span>

        </div>
    </form>
}

export default ToDo