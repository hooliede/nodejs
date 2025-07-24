const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();


app.use((req, res, next) => {
  console.log(`>> 요청: ${req.method} ${req.url}`);
  next();
});



app.use(bodyParser.json());
// bodyParser를 json 형태로 사용하겠다
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB Connection Fail", err);
  });

app.listen(5050, () => {
  console.log("server on 5050");
});
// 포트 번호 5050으로 오는 건 다 여기로 오게 하겠다
