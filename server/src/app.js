const 
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    app = express(),
    mongomodule = require('./mongodb'),
    db = mongomodule.connect(),
    User = require("../models/user")
;

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Add new user
app.post('/users', (req, res) => {
    var db = req.db, 
        name = req.body.name, 
        description = req.body.description
    ;

    var newUser = new User({
        name: name,
        description: description
    })

    newUser.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'User saved successfully!'
        })
    })
})

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