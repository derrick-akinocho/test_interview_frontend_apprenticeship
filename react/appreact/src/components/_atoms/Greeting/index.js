import React from 'react';
import "./greeting.css";

const Greeting = ({ name }) => {
    return <h1>Hello, {name} !</h1>;
};

export default Greeting;