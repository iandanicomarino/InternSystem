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
    router      :router
}
app.use(bodyparser.json());
app.use('/',require('./api/routers/InternRouter.js')(params));
app.listen(1111);
console.log("server started: port 1111")
