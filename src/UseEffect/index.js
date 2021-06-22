import React, { useState, useEffect } from 'react';
import WithWrapper from '../HOC/WithWrapper';


function UseEffect() {
    const [state, setState] = useState(0)
    const [render, setRender] = useState(0);
    const [boolean, setBoolean] = useState(false);

    //  The useEffect hook makes it possible to load data to a state either once (on mount when the second argument, the array are empy). Or whenever the data changes (just add the variable or function to the array ), otherwise you will get an infinity-loop (React rerenders everytime the state is updated)

    useEffect(() => {
        setRender(r => r + 1)
    }, [])

    useEffect(() => {
        setState(s => s + 1)
    }, [boolean])

    //FUNCTIONS
    function RandomFunction() {
        setBoolean(!boolean)
    }


    return (
        <div>
            <h1>useEffect</h1>
            <h3>On mount (no value in the useEffect array) {render}</h3>
            <h3>This value will increase every time the boolean state changes {state}</h3>
            <h3>{boolean.toString()}</h3>
            <button onClick={RandomFunction}>button</button>
        </div>
    )
}

export default WithWrapper(UseEffect);
