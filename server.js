const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
// var student = require('./controllers/student_details');
var studind = require('./router/Stud_index');
var facuind = require('./router/facu_index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    return res.send({error:true,message:'Server is not connected successfully...'});
});

// app.get("/studentDetails", student.caller.getStudents);
// app.post("/createStudents",student.caller.postStudents);
// app.put("/updateStudents/:stud_id",student.caller.updateStudents);
// app.put("/updateAddress/:stud_id", student.caller.updateAddress);
// app.delete("/deleteStudent/:stud_id", student.caller.deleteStudents);

app.use('/', studind);
app.use('/', facuind);

var listener = app.listen(3000,function(){
    console.log('Node server listening on the port: '+ listener.address().port+'...');
});
