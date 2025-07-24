const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");

router.use("/tasks", taskApi);

// routes 확인용
console.log("📁 index.js 라우터 로딩됨");

module.exports = router;



