var express = require('express');
var router = express.Router();

// /로 되어 있지만 /posts가 생략
router.get('/', function(req, res) {
  res.render('index', { title: '게시판', pageName:'posts/list.ejs' });
});

router.get('/insert', function(req, res, next){
  res.render('index', {title: '글쓰기', pageName:'posts/insert.ejs'});
});

router.get('/read', function(req, res, next){
  const id=req.query.id;
  res.render('index', {title: '게시글 정보', pageName:'posts/read.ejs', id:id});
});


module.exports = router;