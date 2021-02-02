import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthCheck, SuspenseWithPerf, useFirebaseApp } from 'reactfire';
import './App.css';
import Login from './components/Login';
import Todos from './components/Todos';
import useEmulatorsIfLocalhost from './emulators';

function App() {
    const app = useFirebaseApp();
    useEmulatorsIfLocalhost(app).then(() => console.log("Using emulators"));

    return (
            <SuspenseWithPerf fallback={<span>Loading...</span>} traceId="reactfire-missing-privileges">
                <Router>
                    <Switch>
                        <Route path="/">
                            <AuthCheck fallback={<Login/>}>
                                <Todos/>
                            </AuthCheck>
                        </Route>
                    </Switch>
                </Router>
            </SuspenseWithPerf>
    );
}

export default App;
