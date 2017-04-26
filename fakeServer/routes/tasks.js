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
    res.json({isOk: true})
    console.log(tasks);
});


router.get('/delete/:id', function (req, res, next) {
    let taskID = req.params['id'];
    for (task of tasks) {
        if (task.id == taskID) {
            let index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            res.json({isOk: true})
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



module.exports = router;