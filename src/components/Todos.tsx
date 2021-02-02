import 'firebase/auth';
import 'firebase/firestore';
import { ReactElement } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';

interface TodoData {
    task: string
}

function useTodos(): TodoData[] {
    const { data: user } = useUser();
    const firestore = useFirestore();
    const todosRef = firestore.collection("todos");
    const query = todosRef.where("uid", "==", user?.uid || "");
    return useFirestoreCollectionData<TodoData>(query, { idField: "id", initialData: [] }).data;
}

export default function Todos(): ReactElement {
    const auth = useAuth();
    const logout = async () => {
        await auth.signOut();
    }
    const todos = useTodos();

    return (
            <>
                <h1>Todos</h1>
                <ul>
                    {todos.map(todo => <li key={todo.task}>{todo.task}</li>)}
                </ul>
                <button onClick={logout}>Logout</button>
            </>
    )
}
