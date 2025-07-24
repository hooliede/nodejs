const express = require("express");
const router = express.Router();
const taskController = require("../controller/task.controller");

// routes 확인용
console.log("📁 task.js 라우터 로딩됨");

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

// routes 확인용
// router.get("/", (req, res) => {
//   console.log("✅ GET /api/tasks 도달함");
//   res.send("get tasks");
// });


router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);


module.exports = router;


