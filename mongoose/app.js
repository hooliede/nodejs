// ✅ 의존 모듈 불러오기 및 MongoDB 연결
const mongoose = require("mongoose"); 
// → npm install mongoose로 설치한 mongoose 패키지를 가져옴 (MongoDB 연결용 라이브러리)

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-test");
// → mongoose를 사용해 MongoDB 서버(mongoose-test DB)에 연결

const validator = require("validator");
// → npm install validator로 설치한 validator 패키지를 가져옴 (데이터 유효성 검사용)

const { Schema } = mongoose;
// → mongoose 안에 있는 Schema 생성자를 구조분해 할당으로 가져옴
// const Schema = mongoose.Schema는 몽구스의 스키마를 가져와서 Schema 변수에 넣는 작업
// 하지만 const { Schema } = mongoose; 이거는 애초에 mongoose의 스키마를 가져오는 것


const usersSchema = new Schema({
// 우리는 Mongoose에서 제공하는 **스키마 생성자 함수(Schema constructor)**를 가져왔고,
// 그걸 이용해서 우리가 정의한 **사용자 데이터 구조(스키마)**를 만들고 싶은 거야.

// 그러니까 단순한 변수 할당이 아니라,
// **"생성자 함수를 실행해서 인스턴스를 생성"**해야 하므로 new Schema({...})를 쓰는 거야.
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true, // 무조건 입력을 해야하는 값
    validate: {
      validator: function (value) {
        // if (!value.includes("@")) throw new Error("This is not an Email");
        if (!validator.isEmail(value)) throw new Error("This is not an Email");
      },
    },
    // validate:는 **mongoose 스키마에서 유효성 검사를 지정할 때 사용하는 키(key)
    // required든 validate든 mongoose의 스키마 옵션 문법
  },
  password: {
    type: String,
    required: true,
    trim: true, // 입력값에 공백이 있을 경우에 제거해주는 기능
  },
  age: {
    type: Number,
    default: 0, // 기본 값을 0으로 설정하는 기능
  },
});

const User = mongoose.model("User", usersSchema);
// 방금 만든 Schema를 기반으로 MongoDB 컬렉션과 연결할 "모델 객체"를 만드는 코드
// 모델명 = 모델 생성 함수("연결할 컬렉셕 이름", 사용할 스키마 변수명)

// const newUser = new User({
//   name: "김철수",
//   email: "김철수@gmail.com",
//   password: "        abcdefg",
//   //age: 25,
// });

// newUser.save().then((value) => console.log("value is", value));

User.find({ name: "김철수" })
    .select("name -_id")
    .then((value) => console.log("all data", value));
  // 여기서 사용하는 find는 MQL이 아닌 Mongoose 문법이고 내부적으로 MQL로 변환됨
  // User는 우리가 만든 Mongoose "모델 객체"이다.
