var express = require('express');
var router = express.Router();

//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------
let tasks=[
    {
        id:'1',
        date:'2013-02-08',
        title:'title',
        priority:2,
        isDone:false
    }, {
        id:'2',
        date:'2013-02-09',
        title:'title2',
        priority:2,
        isDone:false
    }
]
//Haaaaaaaaaaaaaaaaaaaaaaaaaaaaardcode------------

router.get('/recent/:amount', function(req, res, next) {
    console.log(req.params);;
    res.json(
        tasks
    )
});
router.post('/add',function(req, res, next){
    let task=req.body;
    tasks.push(task);
    res.json({
        isAdded:true,
        error:undefind,
        errorText:undefined
    })
});
module.exports = router;