var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/data', function(req, res){
  articleProvider.findAll(function(error, docs){
      res.send(docs);
  });
})
router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/users', function(req, res){
    var users = ["A","B","C"];  
    res.render('users', {users: users})
});
module.exports = router;