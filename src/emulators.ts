import firebase from 'firebase';
import { preloadAuth, preloadFirestore, preloadFunctions } from 'reactfire';

const FIRESTORE_PORT = 8080;
const FUNCTIONS_PORT = 5001;
const AUTH_PORT = 9099;

export default function useEmulatorsIfLocalhost(firebaseApp: firebase.app.App): Promise<any> {
    if (document.location.hostname !== "localhost") {
        return Promise.reject();
    }

    return Promise.all([
        preloadFirestore({
            firebaseApp,
            setup: (firestore) => {
                firestore().useEmulator("localhost", FIRESTORE_PORT);
            },
        }),
        preloadFunctions({
            firebaseApp,
            setup: (functions) => {
                functions().useEmulator("localhost", FUNCTIONS_PORT);
            },
        }),
        preloadAuth({
            firebaseApp,
            setup: (auth) => {
                auth().useEmulator(`http://localhost:${AUTH_PORT}`);
            },
        }),
    ]);
}
