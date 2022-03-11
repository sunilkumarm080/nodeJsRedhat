var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WelCome To Red Hat Node Js Application' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello My Name is Sunil Kumar M');
  res.render('index', { title: 'Name' });
});

module.exports = router;
