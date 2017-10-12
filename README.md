[![CircleCI](https://circleci.com/gh/r-park/todo-react-redux.svg?style=shield&circle-token=6caf8c493bd66544717ff9a47ae01d8be036e53c)](https://circleci.com/gh/r-park/todo-react-redux)


# Teal Doocrate
Try the demo at https://doocrate.firebaseapp.com. 

## Stack

- Create React App
- React Redux
- React Router
- React Router Redux
- Redux Thunk
- Redux Devtools Extension for Chrome
- Firebase SDK with OAuth authentication
- Immutable
- Reselect
- SASS


Quick Start
-----------

```shell
$ git clone https://github.com/metaburn/doocrate.git
$ cd doocrate
$ npm install
$ npm start
```

Admins
-----
Import the file under
`assets/database-example.json`
and add the uid of the app admins

Only admins can write new tasks at the moment

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```json
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

## Deploy command
`deploy:staging`
OR 
`deploy:production`
Will build - use the correct config file and deploy

#### Staging
You can also set staging env and use:
`firebase use --add` to add your staging site
Then run like
`npm run build-staging`
`firebase use` and choose staging
`firebase deploy`

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


## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Build the application to `./build` directory|
|`npm test`|Test the application; watch for changes and retest|
