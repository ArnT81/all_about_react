import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
import useEnterKeyEventListener from './useEnterKeyEventListener';
import useFetch from './useFetch';
import WithWrapper from '../HOC/WithWrapper';


function CustomHooks() {
    //  HOOKS
    const [valueOfInput, setValueOfInput] = useState();
    const [name, setName] = useLocalStorage('name', () => '');
    useUpdateLogger(name);
    const enter = useEnterKeyEventListener()
    //Custom hooks are not allowed in local functions or in useEffect, must be called as below
    const fromFetch = useFetch('https://jsonplaceholder.typicode.com/users/');

    //  FUNCTIONS
    const handleChange = (e) => {
        setValueOfInput(e.target.value);
    }

    const save = () => {
        //  Timeout needed to prevent infinity-loop
        setTimeout(() => {
            setName(valueOfInput)
        }, 5)
    }
    // If hookref (enter) returns true function (save) is run
    enter && save();


    const RenderDataFromDB = () => {
        if (fromFetch?.length) {
            return (
                <>
                    {fromFetch.map((data, index) =>
                        <div key={index}>
                            <h3>{data.name}</h3>
                        </div>)}
                </>
            )
        }
        else if (fromFetch) {
            return (
                <>
                    {fromFetch && <h3>{fromFetch.name}</h3>}
                </>
            )
        }
        else {
            return (
                <>
                    <h3>Loading...</h3>
                </>
            )
        }
    }


    return (
        <div>
            <h1>Custom Hooks</h1>
            <h3>enter your name</h3>
            <input type="text"
                onChange={handleChange}
            />
            <button onClick={save}>save</button>
            <h1>Welcome {name}</h1>
            <h1>From db</h1>
            <RenderDataFromDB />
        </div>
    );
}

export default WithWrapper(CustomHooks);