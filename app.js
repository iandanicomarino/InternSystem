var express= require ('express');
var bodyparser= require ('body-parser');
var mongoose = require ('mongoose');
var settings =require ('./config/settings.js');
var app=express();
var router = express.Router();
var params={
    express     :express,
    bodyparser  :bodyparser,
    mongoose    :mongoose,
    settings    :settings,
    Intern      :require ('./api/models/Intern.js'),
    Timelog     :require ('./api/models/Timelog.js'),
    router      :router
}

// app.use(cors());
app.use(express.static(__dirname + '/public')); // THE DIRECTORY FOR THE APP FOR LOCAL DEV
app.use(bodyparser.json());

var test = [require('./api/routers/InternRouter.js')(params),
require('./api/routers/TimelogRouter.js')(params)]

app.use(settings.API_ENDPOINT, test); //this is important
app.listen(1111);
console.log("server started: port 1111")
