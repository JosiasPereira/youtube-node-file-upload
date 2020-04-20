const {Router} = require('express');
const multer = require('multer');

const routes = new Router();
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const UserController = require('./app/Controllers/UserController');
const FileController = require('./app/Controllers/FileController');


routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/', (req, res) =>{
  res.json({message: 'hello world'})
})

module.exports = routes;