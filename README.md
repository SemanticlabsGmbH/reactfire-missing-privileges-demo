This project reproduces the reactfire issue discribed [here](https://github.com/FirebaseExtended/reactfire/discussions/228).
It's also hosted at https://reactfire-missing-privileges.web.app/.

## Install dependencies and start application

```shell
npm install
npm run start
```

This also starts the firebase emulators for auth, storage and hosting with a registered user and a `todos` collection
with a single todo in the firestore.

## How to reproduce the issue

1. Open http://localhost:3000.
2. Click the "Login" button.
3. The todo list is displayed. Click "Logout".
4. Click "Login" again.

You should see a blank page now. When you open the browser console, you will find the following error:

```
scheduler.development.js:407 Uncaught FirebaseError: 
false for 'list' @ L5
    at new e (http://localhost:3000/static/js/1.chunk.js:12520:19)
    at http://localhost:3000/static/js/1.chunk.js:24763:18
    at http://localhost:3000/static/js/1.chunk.js:24764:10
    at e.onMessage (http://localhost:3000/static/js/1.chunk.js:24785:6)
    at http://localhost:3000/static/js/1.chunk.js:24676:18
    at http://localhost:3000/static/js/1.chunk.js:24714:29
    at http://localhost:3000/static/js/1.chunk.js:30787:25
```

The `firestore.rules` also log the authentication and by looking at `firestore-debug.log`, you'll notice that the
authentication was null for the second login.

```shell
null_value: NULL_VALUE
```
