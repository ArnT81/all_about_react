import React, { useContext } from 'react';
import { Context } from './';

//  All of your context-consumers also need to import the useContext from react
export default function Consumer() {
    //  Local reference to the context
    const { states, variables, functions } = useContext(Context);


    return (
        <div>
            <h1>Consumer</h1>
            <h3>States from Context: {states.color.get}</h3>
            <h3>Variables from Context: {variables.name}</h3>
            <h3>Functions from Context:</h3>
            <button onClick={functions.changeColor}>Change color</button>
        </div>
    )
}
