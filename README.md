[![Build Status](https://travis-ci.org/r-park/todo-react-redux.svg?branch=master)](https://travis-ci.org/r-park/todo-react-redux)


# Todo app with React, Redux, and Firebase
A simple Todo app example with `undelete` capability — built with React, Redux, and Firebase. Try the demo at <a href="https://todo-react-redux.firebaseapp.com" target="_blank">todo-react-redux.firebaseapp.com</a>.

- React
- React-Redux
- React-Router
- Redux
- Redux-Devtools-Extension for Chrome
- Redux-Simple-Router
- Babel
- Firebase
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- Gulp
- SASS
- Webpack
  - Webpack dev server
  - Hot-reloading
  - Compile SASS
  - Inject css and js dependencies into html


## Developing
### Prerequisites
`node >= 5.2`

### Installing Dependencies
```bash
$ npm install
```

#### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp run
```

### Redux DevTools extension for Chrome (optional)
This project is configured to take advantage of the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) for Chrome. Get the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)</a>.


## Commands
### Develop
```bash
$ gulp
```
or
```bash
$ npm start
```

- Builds the project
- Starts the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watches for changes to the source files and process changes
- Live-reloads the browser


### Testing
```bash
$ gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.


### Release Builds
```bash
$ gulp dist
```
- Generate bundled and minified artifacts and deposit into `/target` directory
- Inject style and script tags into index.html
