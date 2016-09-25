[![CircleCI](https://circleci.com/gh/r-park/todo-react-redux.svg?style=shield&circle-token=6caf8c493bd66544717ff9a47ae01d8be036e53c)](https://circleci.com/gh/r-park/todo-react-redux)


# Todo app with React, Redux, and Firebase
A simple Todo app example with **undelete** capability — built with React, Redux, and Firebase.

Try the demo at https://todo-react-redux.firebaseapp.com. 

A version of this app built with [redux-saga middleware](https://github.com/yelouafi/redux-saga) is available [here](https://github.com/r-park/todo-redux-saga).


## Stack

- React
- React-Hot-Loader `3.0.0-beta.5`
- React-Redux
- React-Router
- React-Router-Redux
- Redux
- Redux-Thunk
- Redux-Devtools-Extension for Chrome
- Firebase SDK 3 with OAuth authentication
- Babel
- Immutable
- Reselect
- SASS
- Webpack


Quick Start
-----------

```shell
$ git clone https://github.com/r-park/todo-react-redux.git
$ cd todo-react-redux
$ npm install
$ npm start
```

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```
```javascript
// src/core/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


NPM Commands
------------

|Script|Description|
|---|---|
|npm start|Start webpack development server @ **localhost:3000**|
|npm run build|Lint, test, and build the application to **./target**|
|npm run lint|Lint **.js** files|
|npm run server|Start express server @ **localhost:3000** to serve build artifacts from **./target** (must run **npm run build** first)|
|npm test|Run unit tests with Karma and Jasmine|
|npm run test:watch|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
