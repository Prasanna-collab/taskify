import React from 'react'
import { Todo } from '../models/todoModel';
import "./ToDoList.css";
import ToDo from './ToDo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    toDos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedToDos: Todo[];
    setCompletedToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos, completedToDos, setCompletedToDos }: Props) => {
    return <div className="container">
        <Droppable droppableId='TodosList'>
            {(provided) => (
                <div className="todos"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <span className='todos__heading'>Active Tasks</span>
                    {toDos.map((todo, index) => <ToDo
                        index={index}
                        todo={todo}
                        key={todo.id}
                        toDos={toDos} //to assign the functionality
                        setToDos={setToDos} // to update the state value after the certain action(edit, delete) happens.
                    />

                    )}
                    {provided.placeholder}
                </div>
            )}

        </Droppable>

        <Droppable droppableId='TodoRemove'>
            {(provided) => (
                <div
                    className="todos remove"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <span className='todos__heading'>Completed Tasks</span>
                    {completedToDos.map((todo, index) =>
                        <ToDo
                            index={index}
                            todo={todo}
                            key={todo.id}
                            toDos={completedToDos}
                            setToDos={setCompletedToDos} />

                    )}
                    {provided.placeholder}
                </div>)}
        </Droppable>
    </div>
}

export default ToDoList