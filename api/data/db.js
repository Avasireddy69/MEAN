var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017';



mongoose.connect(dburl);

mongoose.connection.on('connected',()=>
{
    console.log('Database connected on: ',dburl);    
});

mongoose.connection.on('disconnected',()=>
{
    console.log('Database disconnected');    
});

mongoose.connection.on('err',(err)=>
{
    console.log('Error connected db, error: ',err);    
});

process.on('SIGINT',()=>
{
    mongoose.connection.close(()=>
    {
        console.log('Database disconnected through process "SIGINT" ');
        process.exit(0);
    });
});