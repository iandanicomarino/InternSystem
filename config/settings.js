var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/internsystem');

module.exports = {
    API_ENDPOINT: "/api/v1"
}
