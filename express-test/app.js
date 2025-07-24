const express = require("express");
const app = express();
// app은 Express 서버 애플리케이션 전체를 통제하는 “중심 객체”야.

// app.get("/", (req, res) => {
//   res.send("Hello Jiman world");
// });

// app.get("/about", (req, res) => {
//   res.send("this is all about express");
// });


// 미들웨어 함수
const checkAuth = (req, res, next) => { // 미들웨어니까 next가 있어야 한다
  console.log("he has admin permission");
  next();
};

// const checkToken = (req, res, next) => {
//   console.log("you have token");
//   next();
// };
const token = "abc";
// // 미들웨어 함수
const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("you don't have token");
  }
};

// 핸들러 함수
const getUser = (req, res) => {
  console.log("here is user information");
  res.send(" here is user information");
};

app.get("/users", checkAuth, checkToken, getUser); //미들웨어는 그냥 계속 추가하면 됨

app.listen(5000, () => {
  console.log("server is on 5000");
});
