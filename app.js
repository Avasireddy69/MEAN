require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('port',3000);

app.use((req,res,next)=>
{
    console.log(req.method, req.url);
    next();
    
});

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',routes);

var server = app.listen(app.get('port'),()=>
{
    var port = server.address().port;
    console.log('Magic happens on port '+port);
});

