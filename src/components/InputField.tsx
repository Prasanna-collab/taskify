import React, { useRef } from 'react';
import "./InputField.css";

interface Props {
    toDo: string | number;
    setToDo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return <>

        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="input"
                placeholder='Enter a task'
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                className="input__box"
            />
            <button className="input__submit" type="submit">Go</button>
        </form>
    </>
}

export default InputField;