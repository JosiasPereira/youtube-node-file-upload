const express = require('express');
const path = require('path');


const app = express();

require('./app/database');

const routes = require('./routes');

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..','temp', 'uploads')));

app.use(routes);

app.listen(3333);
