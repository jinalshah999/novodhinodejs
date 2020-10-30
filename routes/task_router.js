var express = require('express');
var router = express.Router();
var task = require('../Models/Task');
//http://localhost:3000/tasks/1
//http://localhost:3000/tasks/
router.get('/:id?', function (req, res, next) {

    if (req.params.id) {
        task.getTaskById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else {
        task.getAllTasks(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
//http://localhost:3000/tasks/
router.post('/', function (req, res, next) {

    task.addTask(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
//http://localhost:3000/tasks/1
router.delete('/:id', function (req, res, next) {

    task.deleteTask(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/tasks/1
router.put('/:id', function (req, res, next) {

    task.updateTask(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;