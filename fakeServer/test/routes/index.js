var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',function (req,res,next) {
    res.json([
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
    )
})

module.exports = router;
