import React, { useRef } from 'react';
//  HOC´s
import WithWrapper from '../HOC/WithWrapper';
//  STYLES
import styles from './useref.module.css';


function UseRef() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const zipRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    let i = -1;
    const refs = [
        firstNameRef,
        lastNameRef,
        addressRef,
        zipRef,
        cityRef,
        stateRef
    ]


    const toggleFocus = (e) => {
        e.preventDefault();

        if (i == refs.length - 1) {
            i = 0;
            refs[i].current.focus();
        }
        else {
            i++;
            refs[i].current.focus();
        }
    }


    return (
        <div className={styles.form}>
            <h2>useRef</h2>
            <form>
                <div>
                    <label>First name</label>
                    <input type="text" name="first name" ref={firstNameRef} />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" name="last name" ref={lastNameRef} />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="last name" ref={addressRef} />
                </div>
                <div>
                    <label>Zip code</label>
                    <input type="text" name="last name" ref={zipRef} />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" name="last name" ref={cityRef} />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" name="last name" ref={stateRef} />
                </div>
                <button onClick={toggleFocus}>Toggle Focus</button>
            </form>
        </div>
    )
}

export default WithWrapper(UseRef);
