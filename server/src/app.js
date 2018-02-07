const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/users', (req, res) => {
    res.send(
        [{
            name: "Test User",
            description: "Random description for test user."
        },{
            name: "Test User 2",
            description: "Random description for test user 2."
        }]
    )
})


app.listen(process.env.PORT || 8081)