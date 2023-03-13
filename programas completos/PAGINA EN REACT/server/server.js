const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')

const cors = require('cors')

const app = express()

app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'images'
}))
app.use(cors())

app.use(require('./routes/routes'))

app.listen(9000, () => {
    console.log('server running on', 'http://localhost:' + 9000)
})