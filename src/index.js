const express = require('express');
const app = express();
const morgan = require('morgan');
const body_parser =  require('body-parser');
const cors = require('cors');
require('./ConectionDB/connectionMongo');
const allRoutes = require('./Routes/routes');

// You can make requests from another machine 
app.use(cors());
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(morgan('dev'));

// Routes
app.use('/SistemaInvestigacion',allRoutes);



var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server on port ',port);
});