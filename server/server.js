import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import "colors";


dotenv.config({ path: './.env' });

console.log("Loaded GROQ_API_KEY:", process.env.GROQ_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://Hemanth:hemanth@cluster0.7wme1na.mongodb.net/Users',{

}).then(()=>console.log('MongoDB connected'.bgBlue.green.bold))
.catch(err=>console.log(err));

const AttendanceSchema=new mongoose.Schema({
    date:String,
    subname:String,
    status:String,
})



const details=new mongoose.Schema({
    name:String,
    rollNo:String,
    mob:String,
    dept:String,
    reg:String,
    email: String,
    password: String,
    attendance:[AttendanceSchema],
    percentage:Number
});

const person=mongoose.model('person',details);

const groq=new Groq({"apiKey":process.env.GROQ_API_KEY});


app.post('/users', (req, res) => {
    const { name, rollNo, mob, dept, reg, email, password } = req.body;

    const user = new person({ name, rollNo, mob, dept, reg, email, password });

    user.save()
        .then(savedUser => {res.status(201).json(savedUser);console.log(savedUser)})
        .catch(err => res.status(500).json({ error: err.message }+' server'));
});


app.get('/users', async (req, res) => {
    try {
        const std = await person.find(); 
        res.status(200).json({ users: std }); 
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});


app.get("/student/:rollNo", async (req, res) => {
  try {
    const roll = req.params.rollNo.trim();

    const std = await person.findOne({ rollNo: roll });

    if (!std) {
      return res.status(200).json({ student: null});
    }

    res.status(200).json({ student:std });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.post("/users/:rollNo", async (req,res)=>
{
    try {
        const {rollNo,date,subject,status}=req.body;
    const attend= await person.findOne({ rollNo:rollNo });

    const oldpercent=attend.percentage || 0;

    attend.attendance.push({date:date,subname:subject,status:status});

    const increment= status==="present"?0.3:-1.22;

    attend.percentage =oldpercent+increment;
     
    await attend.save();

     return res.json({
      message: "Attendance updated",
      users:attend
    });
    } catch (err) {
       res.status(500).json({error :err.message}); 
    }
});



app.post('/api/chat', async (req,res)=>{
const { message } = req.body;
   try {
     const product=await person.find().lean();

     const airesponse=await groq.chat.completions.create({
        model: "moonshotai/kimi-k2-instruct",
        messages:[
         {
            role:"system",
            content:"Answer ONLY using the attendance database. If the answer is not found, say 'Not available in database'."

         },
         {
            role:"assistant",
            content:"Database"+JSON.stringify(product)
         },
         {
            role:'user',
            content:message
         }
        ]
     });
     const reply=airesponse.choices[0].message.content;
     res.json({reply});
   } catch (error) {
    console.error(error);       
    res.status(500).json({ error: "Chat failed" });
   }
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Server Connected".bgWhite.blue.bold);
});
