var faculty = require('../controllers/faculty_details');
var express = require('express')
var router = express.Router();

router.get("/facultyDetails", faculty.caller.getFaculties);
router.post("/createFaculty",faculty.caller.postFaculty);
// router.put("/updateStudents/:stud_id",student.caller.updateStudents);
// router.put("/updateAddress/:stud_id", student.caller.updateAddress);
// router.delete("/deleteStudent/:stud_id", student.caller.deleteStudents);

module.exports = router;