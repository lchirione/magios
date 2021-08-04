// initilitation
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var path = require('path');
const hbs = require('hbs');


const indexRouter = require('./routes/indexRouter')
const lcRouter = require('./routes/lchirioneRouter')
const certRouter = require('./routes/dwRouter')


// view engine

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));


// routes
app.use('/',indexRouter);
app.use('/',lcRouter);
app.use('/',certRouter);

// run server
app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});