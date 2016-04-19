
module.exports = function (params){
    var router     = params.router;
    var ctrl       = require ('../controllers/InternController')(params);
    //router.post('/addintern',ctrl.addintern);
    router.get('/viewinterns',ctrl.viewinterns);
    router.post('/register',ctrl.register);
    router.post('/login',ctrl.login);
    router.put('/editinfo/:id',ctrl.editinfo);
    return router;
};
