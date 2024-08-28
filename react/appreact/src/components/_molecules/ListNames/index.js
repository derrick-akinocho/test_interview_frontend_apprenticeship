import React from "react";
import "./listnames.css";

const ListNames = () => {

    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return (
        <div className="names-list">
            <h2>Task 3: List Rendering</h2>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListNames;