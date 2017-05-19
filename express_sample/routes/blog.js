var express = require("express");
var router = express.Router();
var articleProvider = require('./articleprovider').ArticleProvider;

var articleProvider = new ArticleProvider();

router.get('/all', function (req, res) {
    articleProvider.findAll(function (error, docs) {
               res.render('blog/all', {
            title: 'Listing All Blogs',
            articles: docs
        });
    })
});

router.get('/new', function (req, res) {
    
    res.render('blog/new', {
        title: "Create New"
    })
});
router.get('/reg', function (req, res) {
    res.render('registration.htm', {
        title: "Create New"
    })
})

router.get('/:id?', function (req, res) {

    articleProvider.findById(req.params.id, function (error, data) {
     
        res.render('blog/edit', {
            title: "Edit Existing",
            article: data
        })
    })

})

router.post('/new', function (req, res) {
    articleProvider.save({
        title: req.param('title'),
        body: req.param('body')
    }, function (error, docs) {
        res.redirect('/blog/all')
    });
});

router.post('/:id?', function (req, res) {
    articleProvider.update({
        title: req.param('title'),
        body: req.param('body'),
         _id: req.param('_id')
    }, function (error, docs) {
        res.redirect('/blog/all')
    });
});
module.exports = router;