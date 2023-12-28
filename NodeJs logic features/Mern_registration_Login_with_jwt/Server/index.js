const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user')

const app = express();

//middleware
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");



app.post('/login', (req, res) => {
    const { email, password } = req.body; //distructring
    userModel.findOne({ email: email })
        .then(user => {
                if (user) {
                    if (user.password === password) {
                        res.json("success");
                    } else {
                        res.json("password incorrect");
                    }

                } else {
                    res.json("NO User this email");
                }

            }

        )
        .catch(err => console.log(err));


})

app.post('/registration', (req, res) => {

    userModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => {
                res.json(err)
                console.log(err)
            }

        )

})

app.listen(3000, () => {
    console.log("server is running");
})