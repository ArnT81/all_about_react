import React from 'react';
import { Link, useHistory } from "react-router-dom";


function Container() {
    const history = useHistory();
    const withProps = "props sent with router dom appears in child as props.location.[variablename] or props.location.state if sent with history.push()"

    //   Function calling history.push ("history" not available before mounted)
    const goToPageThree = () => {
        history.push("/pageThree", withProps);
    }

    
    return (
        <div style={styles}>
            <div>
                <h2>Routing</h2>
                <h3>(with lazy loading)</h3>
                <p>requires npm package "react-router-dom" (v5)</p>
            </div>

            {/* Ordinary link */}
            <Link to="/pageOne">Go to Page 1</Link>

            {/* Ordinary link with props*/}
            <Link to={{ pathname: "/pageTwo", withProps }}>Go to Page 2 with props</Link>

            {/* Routing with button direct in renderer, props may be sent as second argument as in function above */}
            <button style={{ width: "100px" }}
                onClick={() => history.push("/pageThree")}>
                Go to Page 3
            </button>

            {/* Routing with button handled by function */}
            <button style={{ width: "100px" }}
                onClick={goToPageThree}>
                Go to Page 3 with props
            </button>
        </div>
    )
}

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "400px"
}

export default Container;
