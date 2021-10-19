import React from 'react';
import styles from '../components/Wrapper/wrapper.module.css';


export default function WithWrapper(OriginalComponent) {
    const NewComponent = (props) => <div className={styles.wrapper}><OriginalComponent fromGrandParent='props from WithWrapper'{...props} /></div>
    return NewComponent;
}