var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../../config/settings.js');
var Intern = {
    username    :{type:String, unique:true},
    password    :{type:String, require:true},
    firstname   :{type:String, require:true},
    middlename  :{type:String, require:true},
    lastname    :{type:String, require:true},
    birthday    :{type:Date},
    firstday    :{type:Date},
    school      :{type:String, require:true},
    timelog     :[{type: Schema.Types.ObjectId, require:true, ref:"Timelog"}],
    handler     :{type:String},
    coordinator :{type:String},
    timedout    :{type:Boolean, require:true},
    email       :{type:String}
}
module.exports=mongoose.model('Intern',Intern)
