[![Build Status](https://travis-ci.org/r-park/todo-react-redux.svg?branch=master)](https://travis-ci.org/r-park/todo-react-redux)


# Todo app with React, Redux, and Firebase
A simple Todo app example with `undelete` capability — built with React, Redux, and Firebase v3.

Try the demo at <a href="https://todo-react-redux.firebaseapp.com" target="_blank">todo-react-redux.firebaseapp.com</a>.

- React
- React-Hot-Loader `3.0.0-beta.2`
- React-Redux
- React-Router
- React-Router-Redux
- Redux
- Redux-Devtools-Extension for Chrome
- Babel
- Firebase `3.0.2`
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- SASS
- Webpack
  - Webpack dev server
  - Hot-reloading
  - Compile SASS
  - Inject css and js dependencies into html


Quick Start
-----------

```shell
$ git clone https://github.com/r-park/todo-react-redux.git
$ cd todo-react-redux
$ npm install
$ npm start
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run dev`|Same as `npm start`|
|`npm run lint`|Lint `.js` files|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
