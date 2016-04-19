module.exports = function (body){
    var express     = body.express;
    var bodyparser  = body.bodyparser;
    var mongoose    = body.mongoose;
    var Intern      = body.Intern;
    var Timelog      = body.Timelog;
    var controllers =[];
    // controllers.addintern=function (req,res){
    //     var newIntern = new Intern({
    //         firstname: req.body.firstname,
    //         middlename: req.body.middlename,
    //         lastname: req.body.lastname
    //     });
    //     newIntern.save(function (err,docs){
    //         if(err){
    //             console.log(err);
    //             //         }
    //         else console.log("saved"+docs)
    //     });
    //     Intern.find(function(err,docs){
    //         res.json(docs);
    //     })
    // }
    controllers.viewinterns=function (req,res){
        Intern.find(function(err,docs){
            res.json(docs);
        });
    };
    controllers.register=function(req,res){

        var newIntern = new Intern({
            username    :req.body.username,
            password    :req.body.password,
            firstname   :req.body.firstname,
            middlename  :req.body.middlename,
            lastname    :req.body.lastname,
            school      :req.body.school,
            timedout    :true
        })
        newIntern.save(function(err,docs){
            if (err){res.status(409).json(err);return;}
            res.status(200).send("New Account Saved!");
        });
    };
    controllers.login=function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        console.log(req.body);
        Intern.findOne({$and:[{username:username},{password:password}]}).populate([{path:'timelog',model:Timelog}]).exec(function (err,docs){
            if(err){res.status(400).send("FAIL LOGIN");return;};
            res.json(docs);
        });
    }
    controllers.editinfo=function (req,res){
        var newInternInfo ={
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            birthday:req.body.birthday,
            firstday:req.body.firstday,
            email:req.body.email,
            school:req.body.school,
            handler:req.body.handler,
            coordinator:req.body.coordinator
        }
        console.log(req.params.id);
        console.log(newInternInfo);
        Intern.findOneAndUpdate({_id:req.params.id},{$set:newInternInfo},function (err,docs){
            if(err) {res.status(400).json(err);return;}
            res.status(200).send(docs);

        });
    }
    return controllers;
}
