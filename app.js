
const express = require('express')
const app = express()
const port = process.env.port || 3001

app.get('/', (req, res) => {
    res.send('Hello World! We are deployed')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
