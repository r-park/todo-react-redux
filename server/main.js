const express = require('express');
const logger = require('winston');


//=========================================================
//  SETUP
//---------------------------------------------------------
const PROJECT_ROOT_DIR = process.cwd();

const app = express();

app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);

app.use(require('morgan')('dev'));
app.use(express.static(`${PROJECT_ROOT_DIR}/target`));


//=========================================================
//  ROUTER
//---------------------------------------------------------
const router = new express.Router();

router.get('*', (req, res) => {
  res.sendFile(`${PROJECT_ROOT_DIR}/target/index.html`);
});

app.use(router);


//=========================================================
//  START SERVER
//---------------------------------------------------------
app.listen(app.get('port'), app.get('host'), error => {
  if (error) {
    logger.error(error);
  }
  else {
    logger.info(`Server listening @ ${app.get('host')}:${app.get('port')}`);
  }
});
