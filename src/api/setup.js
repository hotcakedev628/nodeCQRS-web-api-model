const path = require('path');
const errorHandlersMiddleware = require("./error-handlers-middleware")
const cors = require('cors')
const express = require('express')
const app = express();


function setup() {
    app.disable('etag')
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(cors())
    app.use(require(`./routes`))
    errorHandlersMiddleware(app)
    return app
}

module.exports = {setup}