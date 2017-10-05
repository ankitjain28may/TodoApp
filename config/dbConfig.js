require('dotenv').config();

var host = process.env.DB_HOST;
var db_port = process.env.DB_PORT;
var db = process.env.DB_DATABASE;


module.exports = {

    dbConnectionString: function() {
        return 'mongodb://'+host+':'+db_port+'/'+db;
    }
}
