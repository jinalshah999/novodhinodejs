var express = require('express');
var router = express.Router();
var task = require('../Models/Task');

router.get('/', function (req, res, next) {

    task.getAllTasks(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;