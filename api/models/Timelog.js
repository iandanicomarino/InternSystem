var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../../config/settings.js');
var Timelog = {

    date    :{type: Date, default: Date.now()},
    timein  :{type: Date, default: Date.now()},
    timeout :{type: Date, default: Date}
}
module.exports=mongoose.model('Timelog',Timelog)
