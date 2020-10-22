var db = require('../dbConnection'); //reference of dbconnection.js file

var Task = {

    getAllTasks: function (callback) {

        return db.query('select * from task', callback);
    },
    addTask: function (task, callback) {
        return db.query('insert into task values(?,?,?)', [task.Id, task.Title, task.Status], callback);
    },
    deleteTask: function (id, callback) {
        return db.query('delete from task where Id=?', [id], callback);
    },
    updateTask: function (id, task, callback) {
        return db.query('update task set Title=?,Status=? where Id=?', [task.Title, task.Status, id], callback);
    }

};

module.exports = Task;