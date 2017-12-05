const path = require('path');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const errorHandlersMiddleware = require("./core/errorHandlersMiddleware")
const winstonLogger = require('./core/logger')
const cors = require('cors')
const fallback = require('express-history-api-fallback')
const express = require('express')
const root = __dirname + '/public'
const app = express();


winstonLogger.configure()
app.disable('etag')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.get('/' , ()=>{
    console.log('sssss')

})
app.use(require(`./routes/accounts.router`))



app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

errorHandlersMiddleware(app)

module.exports = app;

