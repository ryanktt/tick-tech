const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./util/database');

const app = express();

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(adminRouter);
app.use(clientRouter);

app.listen(3000,() => {
    console.log('listening on port 3000.')
})
