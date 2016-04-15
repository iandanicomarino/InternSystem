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
            timein: new Date()
        }

        Timelog(newTimelog).save(function (err, timelog){
            if (err){console.log(err);res.json(err);return};

            Intern.findOne({_id:req.params.id})
                .exec(function (err, doc) {
                    doc.timelog.push(timelog._id);
                    doc.save(function (err, ok) {
                        res.status(200).send("Saved Time");
                    })
                })
        });
    };
    return controllers;
}
