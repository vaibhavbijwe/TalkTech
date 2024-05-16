const express = require('express');
const morgan =  require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//dotenv
dotenv.config();

//mongo connection 
connectDB(); 
//rest object
const app = express();

//route path
const authRoutes = require('./routes/authRoutes')

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080;

//routes Api
app.use('./api/v1/auth', authRoutes);

//listen server
app.listen(PORT, () => {
    console.log(
      `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
        .white
    );
  });