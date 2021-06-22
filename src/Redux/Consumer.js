import React from 'react';
//  REDUX
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

export default function Consumer() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch(); //   Local of custom hook useDispatch


    return (
        <div>
            <h1>Consumer</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ?
                <h2>Valuable information I shouldn't see</h2>
                :
                <h2>Log in</h2>
            }
            <button onClick={() => dispatch(login())}>Login</button>
        </div>
    )
}
