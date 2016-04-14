var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../../config/settings.js');
var Intern = {
    middlename  :{type:String},
    firstname   :{type:String},
    lastname    :{type:String},
    birthday    :{type:Date},
    firstday    :{type:Date},
    school      :{type:String},
    timelog     :[{
                    date    :{type: Date, default: Date.now()},
                    timein  :{type: Date, default: Date.now()},
                    timeout :{type: Date, default: Date.now()}
                }],
    handler     :{type:String},
    coordinator :{type:String}
}
module.exports=mongoose.model('Intern',Intern)
