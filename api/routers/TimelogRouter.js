
module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/TimelogController')(params);
    //router.post('/addintern',ctrl.addintern);
    router.put('/timein/:id',ctrl.timein);
    router.put('/timeout/:id',ctrl.timeout);
    return router;
};
