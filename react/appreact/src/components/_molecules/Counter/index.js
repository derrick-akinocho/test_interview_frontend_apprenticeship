import React, {useState} from "react";
import Button from "../../_atoms/Button";
import "./counter.css"
const Counter = () => {

    const [number, setNumber] = useState(0);

    const increment = () =>{
        setNumber(number + 1);
    }

    const decrement = () =>{
        setNumber(number - 1);
    }

    return (
        <div>
            <h2>Task 2: State Management</h2>

            <p>Value: {number}</p>
            <Button filled onClick={increment} title="Increment"/>
            <Button onClick={decrement} title="Decrement"/>
        </div>
    )
};

export default Counter;
