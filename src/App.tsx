import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthCheck, FirebaseAppProvider, SuspenseWithPerf } from 'reactfire';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const firebaseConfig = {
    apiKey: "AIzaSyDyMxEWjVFcV2krMuysLg_AjAxuAtxSR-A",
    authDomain: "reactfire-missing-privileges.firebaseapp.com",
    projectId: "reactfire-missing-privileges",
    storageBucket: "reactfire-missing-privileges.appspot.com",
    messagingSenderId: "123161412700",
    appId: "1:123161412700:web:8f3ace5f43d21260d5d299"
};

function App() {
    return (
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <SuspenseWithPerf fallback={<span>Loading...</span>} traceId="reactfire-missing-privileges">
                    <Router>
                        <Switch>
                            <Route path="/">
                                <AuthCheck fallback={<Login/>}>
                                    <Dashboard/>
                                </AuthCheck>
                            </Route>
                        </Switch>
                    </Router>
                </SuspenseWithPerf>
            </FirebaseAppProvider>
    );
}

export default App;
