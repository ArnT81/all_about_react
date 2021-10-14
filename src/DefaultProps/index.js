import React, { useState } from 'react';
//  HOC
import WithWrapper from '../HOC/WithWrapper';
//  COMPONENTS
import Child from './Child';

function DefaultProps() {
    const [doNotSendProps, setDoNotSendProps] = useState(false)
    const [buttontext, setButtonText] = useState('Do not send props to Child')

    const handleClick = () => {
        setDoNotSendProps(!doNotSendProps)
        !doNotSendProps ? setButtonText('send props to Child') : setButtonText('Do not send props to Child')
    }


    return (
        <div>
            {
                !doNotSendProps ?
                    <Child
                        fromParent='This props is from parent'
                    />
                    :
                    <Child />
            }
            <button onClick={handleClick}>{buttontext}</button>
        </div>
    )
}


export default WithWrapper(DefaultProps);
