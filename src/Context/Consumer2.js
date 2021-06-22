import React, { useContext } from 'react';
import { Context } from './';

//  All of your context-consumers also need to import the useContext from react
export default function Consumer2() {
    //  Local reference to the context
    const { states } = useContext(Context);

    //  useState hook (state) in "Provider.js" is changed in a local function
    function localFunction() {
        states.text.set('Changed in child')
    }


    return (
        <div>
            <h1>Consumer 2</h1>
            <h3>State from Context: {states.text.get}</h3>
            <button onClick={localFunction}>Change text</button>
        </div>
    )
}
