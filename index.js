const express = require ("express")

const app = express()

app.use('/', express.static("frontend"))



app.listen(process.env.port || 8080)