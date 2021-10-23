import React from 'react';


export default function PageTwo({ location }) { return <div style={styles}><h2>Page 2</h2><p> {location.withProps}</p></div> }

const styles = {
    background: "green",
    color: "white"
}