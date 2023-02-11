const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');


//load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const hospitals = require('./routes/hospitals');

const app = express();

//Body parser
app.use(express.json());

//Mount routers
app.use('/api/v1/hospitals', hospitals); //การส่งต่อหน้าที่เมื่อถูกเรียก part ให้ hostpital

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handler Unhandled promise rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(()=>process.exit(1));
});
