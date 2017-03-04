var express = require('express');
var moment = require('moment')
var router = express.Router();

//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------
let tasks = [
    {
        id: '1',
        date: '2017-02-08',
        title: 'title',
        priority: 2,
        isDone: false
    }, {
        id: '2',
        date: '2017-04-01',
        title: 'title2',
        priority: 2,
        isDone: false
    }
]
//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------

router.get('/recent/:amount', function (req, res, next) {
    console.log(req.params);
    ;
    res.json(
        tasks
    )
});
router.post('/add', function (req, res, next) {
    let task = req.body;
    task.id = 3;
    tasks.push(task);
    res.json({
        isAdded: true,
        id: 3
    })
});

router.post('/update/:id', function (req, res, next) {
    let taskID = req.params['id'];
    let taskReq = req.body;
    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                tasks[index] = taskReq;
                console.log(task.priority);
                tasks[index].id = taskID;
            }
        }
    }
    res.json({isUpdt: true})
})

router.get('/postpone/:id', function (req, res, next) {
    let params = req.params;
    let taskID = params.id;
    let postponeDays = req.query.day;

    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                let time = moment(task.date);
                time = time.add(postponeDays, 'days');
                tasks[index].date = time.format('YYYY-MM-DD')
            }
        }
    }
    res.json({isPostponed: 'true'})
});

router.get('/delete/:id', function (req, res, next) {
    let taskID = req.params['id'];
    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            res.json({isDeleted: true})
        }
    }
});
module.exports = router;