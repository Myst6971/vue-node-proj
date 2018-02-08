var 
    mongoose = require('mongoose'),
    db = mongoose.connection,
    Post = require("../models/post")
;

mongoose.connect('mongodb://localhost:27017/users');
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection Succeeded");
});

// Add new user
app.post('/user', (req, res) => {
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