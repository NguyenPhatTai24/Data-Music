const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const work = require('./routes/work');
//express app
const app = express();
require('dotenv').config();
//middleware
app.use(cors());
app.use(express.json());
//routers
app.use('/api/work',work)
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(4000, () => {  
    console.log(`Server is running on port: 4000`);
});
})
.catch((err)=>{console.log(err)})
