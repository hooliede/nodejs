const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();


app.use(bodyParser.json());
// bodyParser를 통해서 데이터의 body를 json 형태로 사용하겠다
app.use("/api", indexRouter);
// 함수를 실행해서 서버 역할을 하는 app 객체 생성
// 이 app 객체를 사용해 라우팅, 미들웨어 설정, 서버 실행 등을 할 수 있다

const mongoURI = `mongodb://localhost:27017/todo-demo`;
// MongoDB 주소 가져오기

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  // Mongoose가 MongoDB 서버에 접속 
  // Mongoose가 MongoDB에 접속할 때 최신 URL 파싱 방법을 쓰도록 설정하는 옵션
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    // 연결이 실패하면 -> Mongoose가 에러 객체를 생성하고, 그 객체가 err 매개변수로 전달이 된다
    console.log("DB Connection Fail", err);
  });

app.listen(5050, () => {
  console.log("server on 5050");
});
// 포트 번호 5050으로 오는 건 다 여기로 오게 하겠다

