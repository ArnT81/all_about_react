import React, { useState } from 'react';
import Child from './Child';
import WithWrapper from '../HOC/WithWrapper';


function Parent() {
    const [state, setState] = useState('state');
    const variable = 'variable';
    const object = {
        name: 'Anders',
        age: '40',
        gender: 'male',
        address: {
            country: 'Sweden',
            city: 'Vislanda'
        }
    };
    const array = [1, 2, 3];


    //  Props will be available in the child as the declared key, the value (inside curly brackets) refer to local name
    return (
        <div>
            <h1>Props</h1>
            <h1>This is the Parent component</h1>
            <Child
                state={state}
                variable={variable}
                object={object}
                ICanNameThisWhatheverIWant={array}
                InLine='Inline string'
            />
        </div>
    )
}

export default WithWrapper(Parent);