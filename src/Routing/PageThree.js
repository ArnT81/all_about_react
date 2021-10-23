import React from 'react';


export default function PageThree({ location }) { return <div style={styles}><h2>Page 3</h2><p> {location.state}</p></div> }

const styles = {
    background: "blue", color: "white"
}