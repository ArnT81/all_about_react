import React from 'react';
//  REDUX
import { connect, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions/index';


function WithStoreToProps(props) {
    //  Individually declared functions
    const decrement = () => props.decrement()

    //  For testing purposes this might be preferred
    const login = () => {
        console.log(props.login().type);
        props.login()
    }

    //  Or with useDispatch() as on increment below (or index.js)
    const dispatch = useDispatch();


    return (
        <>
            <h2>Component with mapStoreToProps & mapActionsToProps</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={decrement}>-</button>
            <h2>counter: {props.counter}</h2>
            <button onClick={login}>Login</button>
            <h2>{props.isLogged.toString()}</h2>
        </>
    );
}

//  redux states to component props
const mapStoreToProps = (store) => {
    return {
        counter: store.counter,
        isLogged: store.isLogged
    }
}
//  redux functions to component props
const mapActionsToProps = {
    increment,
    decrement,
    login
}

export default connect(mapStoreToProps, mapActionsToProps)(WithStoreToProps);