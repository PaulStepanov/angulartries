var express = require('express');
var router = express.Router();


let isLogged = false;
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

router.post('/login',function (req, res, next) {
    console.log(req.body);
    if (req.body.username=='user' && req.body.password == 'user') {
        res.sendStatus(200)
        isLogged = true;
    } else  {
        res.sendStatus(401)
    }
});

router.get('/logout',function (req, res, next) {
    this.isLogged = false;
    res.sendStatus(200)
});
router.get('/user/id', function (req, res, next) {
    console.log(this.isLogged);
    if (isLogged == false) {
        res.sendStatus(403);
    } else {
        res.sendStatus(200);
    };

})



module.exports = router;
