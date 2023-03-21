const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const cors = require('cors');

const app = express();

//Setting public folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


//Enable CORS
app.use(cors());

const port = 3000;

//Start Server
app.listen(port,()=>console.log(`Server has started on ${port}`));

