import { useState, useEffect } from "react";


export default function useEnterKeyEventListener() {
    const [enterkeyWasPressed, setEnterkeyWasPressed] = useState(false);

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
            window.addEventListener("keydown", downHandler);
            window.addEventListener("keyup", upHandler);
        }
    }, []);

    function downHandler({ key }) {
        if (key === 'Enter') {
            setEnterkeyWasPressed(true);
        }
    }

    function upHandler() {
        setEnterkeyWasPressed(false);
    }

    return enterkeyWasPressed;
}