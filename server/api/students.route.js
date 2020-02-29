const { Router } = require("express");
const StudentsController = require("./students.controller");

const studentsRouter = new Router();

studentsRouter.route("/").get(StudentsController.apiGetStudents);
studentsRouter.route("/:id").get(StudentsController.apiGetStudentById);
studentsRouter.route("/").post(StudentsController.apiAddStudent);
studentsRouter.route("/:id").delete(StudentsController.apiDeleteStudentById);
studentsRouter.route("/").delete(StudentsController.apiDeleteStudents);

module.exports = studentsRouter;
