import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import 'colors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://Hemanth:hemanth@cluster0.7wme1na.mongodb.net/Users',{

}).then(()=>console.log('MongoDB connected'.bgBlue.green.bold))
.catch(err=>console.log(err));

const details=new mongoose.Schema({
    name:String,
    rollNo:String,
    mob:String,
    dept:String,
    reg:String,
    email:String,
    password:String
});

const person=mongoose.model('person',details);


app.post('/users', (req, res) => {
    const { name, rollNo, mob, dept, reg, email, password } = req.body;

    const user = new person({ name, rollNo, mob, dept, reg, email, password });

    user.save()
        .then(savedUser => {res.status(201).json(savedUser);console.log(savedUser)})
        .catch(err => res.status(500).json({ error: err.message }+' server'));
});


app.listen(8082, () => {
    console.log("Server Connected".bgWhite.blue.bold);
});
