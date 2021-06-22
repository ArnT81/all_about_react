import { useState, useEffect } from 'react';


function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
}


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
            return () => localStorage.setItem(key, JSON.stringify(value));
        }
        else return;
    }, [key, value]);

    return [value, setValue];
}

