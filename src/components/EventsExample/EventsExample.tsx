import React, {ChangeEvent, MouseEvent, FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value , setValue] = useState<string>("")
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
};

export default EventsExample;