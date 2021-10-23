import React from 'react';
//  HOC´s
import WithWrapper from '../HOC/WithWrapper';
//  ROUTER
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//  COMPONENTS
import Container from './Container';
import Fallback from './Fallback.js';


/* 
/ Router is normally placed at top level in index.js wrapping the entire project
/ React is a "single page application" wich means all of the applications content is loaded when loading and result in slow  
/ rendering. This may be avoided using Reacts lazy loader wich separate affected code and add smaller chunks loaded when needed 
*/
function Routing() {
    //  Need to add the instance directly like this "React.lazy" or it will not work 
    const PageOne = React.lazy(() => import('./PageOne'))
    const PageTwo = React.lazy(() => import('./PageTwo'))
    const PageThree = React.lazy(() => import('./PageThree'))

    //  If you use the structure below you got props
    //  Container is used because useHistory() hook is not available before mounted
    //  Suspense is used to render fallback for the lazy loader, you may also just add a string fallback="Loading..."
    return (
        <Router>
            <Container />
            <Switch>
                <React.Suspense fallback={Fallback}>
                    <Route path="/pageOne" exact render={props => <PageOne {...props} />} />
                    <Route path="/pageTwo" exact render={props => <PageTwo {...props} />} />
                    <Route path="/pageThree" exact render={props => <PageThree {...props} />} />
                </React.Suspense>
            </Switch>
        </Router>
    )
}

export default WithWrapper(Routing);
