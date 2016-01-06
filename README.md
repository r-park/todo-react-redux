[![Build Status](https://travis-ci.org/r-park/todo-react-redux.svg?branch=master)](https://travis-ci.org/r-park/todo-react-redux)


# Todo app with React, Redux, and Firebase
A simple Todo app example with `undelete` capability — built with React, Redux, and Firebase. Try the demo at <a href="https://todo-react-redux.firebaseapp.com" target="_blank">todo-react-redux.firebaseapp.com</a>.

- React
- React-Redux
- React-Router
- Redux
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


## Installing Dependencies
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


## Developing
```bash
$ gulp
```
Executing the default `gulp` command will:
- Build the project
- Start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to the source files and process changes
- Live-reload the browser


## Testing
```bash
$ gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.


## Release Builds
```bash
$ gulp dist
```
- Generate bundled and minified artifacts and deposit into `/target` directory
- Inject style and script tags into index.html
