import React from 'react';
//  COMPONENT
import Consumer from './Consumer';
//  REDUX
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
//  HOC
import WithWrapper from '../HOC/WithWrapper';


//  Normally in index.js
const myStore = createStore(
    allReducers, // Reducers
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for extra devtools in web-browser
);

function Redux() {
    return (
        <Provider store={myStore}>
            <div>
                <h1>Redux</h1>
                Redux is a popular state-manager package, quite unnecessary since Reacts own "context" but still present in a loth of projects and is required knowledge on most companies
                <ol>
                    <li>
                        install package in project folder through console, Example: npm install redux react-redux
                    </li>
                    <li>
                        Create store and "Provider" or HOC
                    </li>
                    <li>
                        Actions
                    </li>
                    <li>
                        Reducers
                    </li>
                    <li>
                        Combine if more than one
                    </li>
                    <li>

                    </li>


                </ol>
            </div>
            <Consumer />
        </Provider>
    )
}

export default WithWrapper(Redux)