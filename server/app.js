var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors')

var originsWhitelist = [
    'http://localhost:4200', //this is front end url
    ];
    // var corsOptions = {
    // origin: function(origin, callback){
    // var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    // callback(null, isWhitelisted);
    // },
    // credentials:true
    // }
    app.use(cors('http://localhost:4200'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());


var route = express.Router();
route.get('/',function(req,res){
    res.json({message : "Hello World"})
})

route.post('/',function(req,res){
    if(req.body.name=="mohan" && req.body.password=="123456"){

      var token =   jwt.sign(req.body,'6776');
      console.log('The token is ',token)


        res.json({message : token})
    }
    else{
        res.json({message : "Incorrect Login"})
    }
console.log("The data is ",req.body.name+"--"+req.body.password)
})

app.use('/api',route)
app.listen(3000,function(){
    console.log('Sever starts')
})

