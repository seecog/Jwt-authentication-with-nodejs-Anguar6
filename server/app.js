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

route.get('/users',(req,res)=>{

var headers = req.headers;
console.log('Th headers is ',headers.authorization)
jwt.verify(headers.authorization,'6776',(err,data)=>{
console.log('Th varifed data is ',data)
if(err){
    res.json({err : err})
}
if(data){
    var users = [
        {name : 'Mohan',age : 21},
        {name : 'Sohan',age : 22}
    ]
    res.json({data : users})
}

})

    
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

