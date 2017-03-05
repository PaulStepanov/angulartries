let express = require('express');
let moment = require('moment')
let router = express.Router();

//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------
let tasks = [
    {
        id: '1',
        date: '2017-03-05',
        title: 'title',
        priority: 2,
        isDone: false
    }, {
        id: '2',
        date: '2017-03-06',
        title: 'title2',
        priority: 2,
        isDone: false
    },
    {
        id: '3',
        date: '2017-03-02',
        title: 'title',
        priority: 2,
        isDone: false
    },{
        id: '4',
        date: '2017-03-09',
        title: 'title',
        priority: 2,
        isDone: false
    },
];
//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------

router.get('/recent/:amount', function (req, res, next) {
    console.log(req.params);
    res.json(
        tasks
    )
});
router.post('/add', function (req, res, next) {
    let task = req.body;
    task.id = 5;
    tasks.push(task);
    res.json({
        isAdded: true,
        id: 5
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
});

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

router.get('/complete/:id', function (req, res, next) {
    let taskID = req.params['id'];
    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                task.isDone = true;
            }
            res.json({isCompleted: true})
        }
    }
});

router.get('/undoComplete/:id', function (req, res, next) {
    let taskID = req.params['id'];
    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                task.isDone = false;
            }
            res.json({isCompleted: true})
        }
    }
});

router.get('/byDate', function (req, res, next) {
    let startDate = req.query['startDate'];
    let endDate = req.query['endDate'];
    let response = [];
    for (task of tasks) {
        if (endDate && moment(task.date).isBetween(startDate, endDate)) {
            response.push(task);
        } else {
            if (moment(task.date).isSame(moment(startDate))) {
                response.push(task);
            }
        }
    }

    res.json(response);
});

module.exports = router;