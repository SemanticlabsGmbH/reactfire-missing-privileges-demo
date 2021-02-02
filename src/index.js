import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FirebaseAppProvider} from "reactfire";

const firebaseConfig = {
    apiKey: "AIzaSyDyMxEWjVFcV2krMuysLg_AjAxuAtxSR-A",
    authDomain: "reactfire-missing-privileges.firebaseapp.com",
    projectId: "reactfire-missing-privileges",
    storageBucket: "reactfire-missing-privileges.appspot.com",
    messagingSenderId: "123161412700",
    appId: "1:123161412700:web:8f3ace5f43d21260d5d299"
};

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <App/>
        </FirebaseAppProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
