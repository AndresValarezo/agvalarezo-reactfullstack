const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Servidor Activo')
})

router.post('/api/objetos',(req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        
        const type = req.body.data.title
        const name = req.body.data.image
        const date = req.body.data.rating

        conn.query(`INSERT INTO image set?`, [{type, name,date}], (err, rows) => {
            if(err) return res.status(500).send('server error')

            res.send('image saved!')
        })
    })
    
})

module.exports = router