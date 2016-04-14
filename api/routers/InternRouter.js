
module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/InternController')(params);

    router.post('/addintern',ctrl.addintern);
    router.post('/viewinterns',ctrl.viewinterns);
    return router;
};
