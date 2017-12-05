const path = require('path');
const bodyParser = require('body-parser');
const errorHandlersMiddleware = require("./core/errorHandlersMiddleware")
const cors = require('cors')
const express = require('express')
const app = express();


app.disable('etag')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use(require(`./routes/accounts.router`))


errorHandlersMiddleware(app)

module.exports = app;

