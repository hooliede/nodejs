const { MongoClient} = require("mongodb");
// MongoClient는 Node.js에서 MongoDB 서버에 연결하기 위한 공식 드라이버의 핵심 객체
// npm(Node Package Manager) 이 관리하는 공식 MongoDB Node.js 드라이버 패키지인 mongodb 패키지에서 연결하기 위한 핵심 객체인 MongoClient를 가져온 것
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

 async function run() {
    // async는 비동기 처리를 나타내며 async 키워드는 이 함수 안에서 await를 쓸 수 있게 해준다.
    const database = client.db("firstDB");
    // client는 MongoDB와 연결된 객체고, 이 코드로 MongoDB 안에 있는 "firstDB"라는 이름의 데이터베이스에 접근
    // 만약 "firstDB"라는 DB가 없으면 MongoDB는 자동으로 만들어준다.
    const users = database.collection("users");
    // 이건 "firstDB" 데이터베이스 안의 "users" 컬렉션(테이블)에 접근하는 코드
    // 이것도 컬렉션이 없으면 자동으로 생성됨




    //    *MongoDB 쿼리 작업은 시간이 걸리는 작업이어서 await을 써야한다.*



    // 단일 값 insert하는 코드
    //  const userData = await users.insertOne({ name: "jiman", age: 25});
    //  console.log("result", userData); 

    // 멀티 값 insert하는 코드 -> 배열을 만들어서 배열을 insert
    //  const userList = [
    //      {name:'김만두', age:30},
    //      {name:'maria', age:18},
    //  ];
    //  const userListResult = await users.insertMany(userList);
    //  console.log('result', userListResult);





    // 단일 값 find하는 코드(조건 없이)
    // const findUser = await users.findOne({name:'maria'}); //{} 중괄호 안에 조건을 입력하면 해당하는 값이 나옴
    // console.log("result", findUser);
    // 단일 값 find하는 코드(조건 있이) -> 조건에 해당하는 값이 여러개인 경우 가장 위에 있는 첫 번째 데이터를 가지고 온다.
    // const findUser = await users.findOne({age:{$gte: 25}}) $gte는 >=을 나타냄
    // console.log("result", findUser);

    // 멀티 값 find하는 코드(조건 없이)
    // const findUser = await users.find({}).toArray()
    // console.log("result", findUser);
    // 멀티 값 find하는 코드(조건 있이) -> find 뒤 괄호 안에 조건 적기
    // const findUser = await users.find({age:{$gte: 25}}).toArray(); find()는 항상 cursor의 형태로 가져와서 array형태로 바꿔 달라는 코드를 적어야 함
    // console.log("result", findUser);




    //update코드
    // const updateUser = await users.updateOne({name:'jiman',}, { $set: { age: 27}}); 무엇을 업데이트 할거냐(조건), 업데이트할 내용
    // console.log("result2",updateUser);




    //delete코드
    // const deleteUsers = await users.deleteMany({age:{$gte:20}}); 조건에 따른 delete절
    // console.log("result3", deleteUsers);



    const userData = await users.find({ name: 'maria'}).project({ name: 1, _id: 0 }).toArray();
    //.project를 통해서 가져올 필드, 안 가져올 필드를 정할 수 있다 -> :1(가져오기), :0(안 가져오기)
    console.log("userData", userData);

 }

 run();
 //함수 정의했고 실행
