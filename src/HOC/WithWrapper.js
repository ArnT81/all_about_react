import React from 'react';
import styles from '../components/Wrapper/wrapper.module.css';


export default function WithWrapper(OriginalComponent) {
    const NewComponent = () => <div className={styles.wrapper}><OriginalComponent /></div>
    return NewComponent;
}