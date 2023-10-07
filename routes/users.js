var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 로그인 페이지
// 페이지 이동은 get, 값 받아서 쓰는 건 post
router.get('/login', function(req, res){
  // index.ejs에 pageName을 선언했으므로 render 안에 같은 변수를 사용해줘야 함.
  res.render('index', {title:'로그인', pageName:'users/login.ejs'});
});

// 회원가입 페이지
router.get('/join', function(req, res){
  res.render('index', {title:'회원가입', pageName:'users/join.ejs'});
});

module.exports = router;
