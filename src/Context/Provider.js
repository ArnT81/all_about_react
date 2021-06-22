import React, { useState } from 'react';
import Consumer from './Consumer';
import Consumer2 from './Consumer2';
import { Context } from './';
import WithWrapper from '../HOC/WithWrapper';

//  The Provider only needs to import the Context object, don´t forget the curly brackets!
function Provider() {
    const [color, setColor] = useState('gray');
    const [text, setText] = useState('example');

    //  Easier to gather data intended to share in an object before adding it as properties in the "Provider"
    const store = {
        states: {
            color: { get: color, set: setColor },
            text: { get: text, set: setText }
        },
        variables: {
            name: 'anders',
            age: '40'
        },
        functions: {
            changeColor
        }
    }

    function changeColor() {
        if (color === 'darkGray') {
            setColor('gray')
        }
        else setColor('darkGray');
    }


    return (
        //  Everything between the provider-tags got access to the "store", normally you would put this in the root (index.js)
        <Context.Provider value={store}>
            <div style={{ background: color }}>
                <h1>Context (Provider)</h1>
                <Consumer />
                <Consumer2 />
            </div>
        </Context.Provider>
    )
}

export default WithWrapper(Provider);
