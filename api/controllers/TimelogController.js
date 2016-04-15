module.exports = function (params){
    var express     = params.express;
    var bodyparser  = params.bodyparser;
    var mongoose    = params.mongoose;
    var Intern      = params.Intern;
    var Timelog     = params.Timelog;
    var controllers =[];


    controllers.timein = function (req,res){
        var newTimelog = {
            date: new Date(),
            timein: new Date(),
            timeout: null
        }
        Intern.findOne({_id:req.params.id})
            .exec(function (err, doc) {
                if(!doc.timedout){res.status(400).send("FAILED YOU HAVE NOT TIMED OUT YET");return;}
                Timelog(newTimelog).save(function (err,docs){
                        if (err){console.log(err);res.json(err);return};
                        doc.timedout=false;
                        doc.timelog.push(docs._id);
                        doc.save(function (err,ok){
                            res.status(200).send("Saved Time");
                        });
                });

            });
        // Timelog(newTimelog).save(function (err, timelog){
        //     if (err){console.log(err);res.json(err);return};
        //     Intern.findOne({_id:req.params.id})
        //         .exec(function (err, doc) {
        //             if(!doc.timedout){res.status(400).send("FAILED YOU HAVE NOT TIMED OUT YET");return;}
        //             doc.timedout=false;
        //             doc.timelog.push(timelog._id);
        //             doc.save(function (err, ok) {
        //                 res.status(200).send("Saved Time");
        //             })
        //         })
        // });
    };
    controllers.timeout = function (req,res){
        var timeid;

        Intern.findOne({_id:req.params.id}).exec(function (err,docs){
            console.log(docs);
            timeid=docs.timelog[docs.timelog.length-1];
            console.log("timeid",timeid);
            Timelog.findOne({_id:timeid}).exec(function(err,timelog){
                if (err){console.log(err);res.json(err);return};
                console.log(timelog);
                timelog.timeout=new Date();
                timelog.save();
                docs.timedout=true;
                docs.save(function (err,docs){
                    res.status(200).send("Timed Out!");
                });
            });
        });


    }
    return controllers;
}
