//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const dashboard = require("../controllers/dashboard.js")
const register = require("../controllers/register.js")
const login = require("../controllers/login.js")
const databaseview = require("../controllers/databaseview.js")
const lob = require("../controllers/lob.js")
module.exports = function(app){

  app.get('/', index.index);
  app.post('/register', register.register);
  app.post('/login', login.login);
  app.get('/user/:username', dashboard.user);
  app.get('/comments/:user_id', dashboard.commentsget);
  app.post('/comments/:user_id', dashboard.commentspost);
  app.post('/comment/delete/:id', dashboard.commentdelete)
  app.get('/permissions/:currentUser', dashboard.permissions);
  app.get('/lob/:zip', lob.lob);
  app.get('/database', databaseview.users);
}
