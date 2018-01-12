const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const routes = require('./routes/')

const app = express()


app
    .set("views", __dirname + "/views")
    .set("view engine", "hjs")

    .use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

routes(app)
app.listen(config.port)