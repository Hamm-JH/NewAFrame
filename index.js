// 기본 설정
const express = require("express");
const app = express();
const PORT = 3000;

var router = express.Router();

// 정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

// app.use('/html', express.static('html'));

// 라우팅 정의
app.get("/", async (req, res) => {
  // res.render('index', {title: 'Main'});
  res.sendFile(__dirname + "/ModelTest.html");
  // res.redirect('/');
});

module.exports = router;

// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});