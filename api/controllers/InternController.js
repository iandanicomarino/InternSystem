module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var Intern      = params.Intern;
    var controllers ={};
    controllers.addintern=function (req,res){
        var newIntern = new Intern({
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname
        });
        newIntern.save(function (err,docs){
            if(err){
                console.log(err);
                return err;
            }
            else console.log("saved"+docs)
        });
        Intern.find(function(err,docs){
            res.json(docs);
        })
    }
    controllers.viewinterns=function (req,res){

    }
    return controllers;
}
