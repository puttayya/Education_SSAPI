var student = require('../controllers/student_details');
var express = require('express')
var router = express.Router();

router.get("/studentDetails", student.caller.getStudents);
router.post("/createStudents",student.caller.postStudents);
router.put("/updateStudents/:stud_id",student.caller.updateStudents);
router.put("/updateAddress/:stud_id", student.caller.updateAddress);
router.delete("/deleteStudent/:stud_id", student.caller.deleteStudents);

module.exports = router;