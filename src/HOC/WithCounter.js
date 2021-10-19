import React, { useState } from 'react';

const WithCounter = (OriginalComponent) => {
    //  All logic intended to be shared shall be in the "NewComponent"
    //  FUNCTION COMPONENT
    function NewComponent(props) {
        const [count, setCount] = useState(0)

        function incrementCount() {
            setCount(count + 1)
        }

        function decrementCount() {
            setCount(count - 1)
        }

        return (
            <OriginalComponent
                name="Anders"
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                {...props}
            />
        );
    }

    return NewComponent;
}

export default WithCounter;
