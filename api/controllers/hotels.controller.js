var objid = require('mongodb').ObjectId;
var dbconn = require('../data/dbconnection.js');


module.exports.hotelsGetAll = (req,res)=>
{
    var db = dbconn.get();
    var collection = db.collection('hotels');

    console.log('db data is : ',collection);
    console.log('get the json');
    var offset = 0;
    var count = 5;
    if(req.query && req.query.offset)
    {
        offset = parseInt(req.query.offset,10);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }

    collection.find().skip(offset).limit(count).toArray((err, data)=>{
        console.log('data is: ',data);
        res.status(200).json(data);
    });

};

module.exports.hotelsGetOne = (req,res)=>
{
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var hotelid = req.params.hotelid;
    collection.findOne({
        _id : objid(hotelid)
    },(err,data)=>
    {
        if(err)
        {
            console.log("Error finding collection");
        }        
        else{
            res.status(200).json(data);
        }
    });
}

module.exports.hotelsAddOne = function(req,res)
{
    var db = dbconn.get();
    var collection = db.collection('hotels');
    console.log("req.body data: ",req.body);

    
        
    if((req.body) && (req.body.name) && (req.body.location) && (req.body.stars))
    {
        collection.insertOne(req.body,(err, response)=>
    {
    
        console.log('response is: ',response.ops);
        res.status(201).json(response.ops);
    });
        
    }
    else{
        console.log('data missing from body');
        res.status(400).json({
            message : "Data missing from body"
        });
    }

};