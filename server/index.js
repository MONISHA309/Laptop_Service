const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const user = require('./schema/userschema')
const info = require('./schema/infoschema')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://monishak:monishak@laptop-service.qqmesz7.mongodb.net/laptop-service?retryWrites=true&w=majority&appName=laptop-service")

app.post("/",(req,res) => {
    const {email,password} = req.body;
    user.findOne({email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("no record existed")
            
        }
    })
})

app.post("/appointment", (req, res) => {
    const { email, phone, type, problem } = req.body;

    // Check if the user exists in the user table
    user.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                // User exists, store appointment information in the info table
                info.create(req.body)
                    .then(() => {
                        res.json("added")
                    })
                    .catch(err => {
                        console.error(err);
                        res.json( "Internal server error" )
                    });
            } else {
                // User doesn't exist, send a response indicating user not found
                res.json("User not found. Please sign up first." );
            }
        })
        .catch(err => {res.json(err)});
});




app.post('/sign',(req,res) => {
    user.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
  console.log('Server started on port 3001');
});
