import { ReactElement } from 'react';
import { useAuth } from 'reactfire';
import 'firebase/auth';

export default function Login(): ReactElement {
    const auth = useAuth();
    const login = async () => {
        await auth.signInWithEmailAndPassword("user@example.com", "password")
    }

    return <button onClick={login}>Login</button>;
}
