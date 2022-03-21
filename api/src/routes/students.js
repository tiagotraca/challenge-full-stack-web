const controller = require("../controllers/students.controller");
const router = require("express").Router();

router
  .get("/", controller.getAllStudents)
  .get("/:id", controller.getStudentByid)
  .post("/", controller.createStudent)
  .put("/:id", controller.updateStudent)
  .delete("/:id", controller.deleteStudent);

module.exports = router;
