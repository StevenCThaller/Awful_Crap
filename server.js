const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended : true }));
// app.use(bodyParser.json());
app.use(express.json());
//Routes
require('./server/config/routes.js')(app);

app.listen(500, function(){
    console.log("Listening on port 500");
});