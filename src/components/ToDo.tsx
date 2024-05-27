import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../models/todoModel'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import "./ToDo.css";
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    todo: Todo;
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
    index: number;
}

const ToDo: React.FC<Props> = ({ todo, toDos, setToDos, index }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string | number>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    const handleDone = (id: number) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    };

    const handleDelete = (id: number) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo))
        setEdit(false);
    }

    return <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
            <form
                className="todos__single"
                onSubmit={(e) => handleEdit(e, todo.id)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {edit ? <>
                    <input
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className="todos__single__text_edit" />
                </> : <>
                    {
                        todo.isDone ? (
                            <s className="todos__single__text">{todo.todo}</s>
                        ) : (
                            <span className="todos__single__text">{todo.todo}</span>
                        )
                    }
                </>}
                <div>
                    <span className="icon" onClick={() => {
                        //false && false => setEdit=> true
                        (!edit && !todo.isDone) && setEdit(!edit)
                    }}>
                        <CiEdit />
                    </span>
                    <span className="icon">
                        <MdDelete onClick={() => handleDelete(todo.id)} />
                    </span>
                    <span className="icon">
                        <IoMdDoneAll onClick={() => handleDone(todo.id)} />
                    </span>
                </div>
            </form>
        )}

    </Draggable>
}

export default ToDo;