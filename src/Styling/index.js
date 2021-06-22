import React, { useState } from 'react';

//  Imported styles (file must be named .module.css )
import styles from './styling.module.css';


export default function Styling() {
    const [color, setColor] = useState('blue');

    //  FUNCTIONS
    function changeColor() {
        if (color === 'blue') {
            setColor('purple')
        }
        else setColor('blue')
    }


    return (
        //  Imported styles (I personally recommend this approach)
        <div className={styles.container}>
            <h1>Styling</h1>

            {/* Globally used CSS (from index.css) may be put here but will quickly get verbuose if not used with caution */}
            <h2 className={'global'}>From index.css</h2>


            {/* Inline styling */}
            <h2 style={{ color: 'red' }}>From inline styling</h2>

            {/* Styling object declared down below (Mainly used in React Native for mobile apps)*/}
            <div style={styles2.background}>
                <h2 style={styles2.h2}>From styling object</h2>
            </div>

            {/* From state */}
            <h2 style={{ color }}>From state</h2>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

//  Styling object... lack some useful CSS properties as gradients f.ex.
const styles2 = {
    background: {
        background: 'yellow'
    },
    h2: {
        color: 'green'
    }
}