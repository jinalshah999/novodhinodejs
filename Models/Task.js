var db = require('../dbConnection'); //reference of dbconnection.js file

var Task = {

    getAllTasks: function (callback) {

        return db.query('select * from task', callback);
    }

};

module.exports = Task;