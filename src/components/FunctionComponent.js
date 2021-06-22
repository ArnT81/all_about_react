import React, { useState } from 'react';
//  COMPONENT
import ClassComponent from './ClassComponent';
//  HOC
import WithWrapper from '../HOC/WithWrapper';


function FunctionComponent() {
    //  React uses state to trigger rerender of virtual DOM
    //  No need to link to window objects
    //  Best practice useState-hook lowercase, function capitalize first letter of new word start with set 
    const [state, setState] = useState(false)

    //  Renderer JSX (extended JavaScript)
    //  Logic in renderer is contained in curly brackets
    //  Use .map() for arrays (do not mutate state)
    function handleClick() {
        setState(!state)
    }

    //  Extra component that may clean up code f.ex. render a map() in the main renderer (has to start with capital letter as ever component in React)
    function AnotherComponent() {
        return <h1>This is an additional local component</h1>
    }

    //  Parentheses after the reference to a function in the renderer is a BIG NONO as they will execute on mount
    //  Exempel: onClick = {handleClick()}
    //  Exempel: onClick = {setState(new state)}

    //  Preferably in component before renderer, faster  
    //  OK but not 
    //  Exempel: onClick={() => setState(new state)}


    return (
        <div>
            <h1>Functions</h1>
            <p>export default directly in declaration of component</p>
            <p>export default after the component (needed when using HOC´s)</p>
            <h1>This is an Function Component</h1>
            <p>Personally prefer functional components since they`re less verbuose</p>
            <p>No worries about mutating the state built in hooks that manages it</p>
            <p>Components inside of components?</p>
            <p>{state.toString()}</p>
            <button onClick={() => setState(!state)}>Change state</button>      {/* OK */}
            <button onClick={handleClick}>Change state</button>                 {/* Preferred */}

            <AnotherComponent />

            <ClassComponent />
            
        </div>
    )
}


export default WithWrapper(FunctionComponent);
