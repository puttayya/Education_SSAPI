const helper = require('./helper');
const queryScript = {};
const qmodels = {};

//student master
queryScript.getAllStudents ='select * from student_info';
queryScript.insertStudents = 'insert into student_info set ?';
queryScript.updateStudents = 'update student_info set ? where stud_id = ?';
queryScript.updateAddress  = 'update student_info set stud_address = ? where stud_id = ?';
queryScript.deletestudents = 'delete from student_info where stud_id = ?';

queryScript.getAllFaculty = 'select * from faculty_info';
queryScript.insertFaculty = 'insert into faculty_info set ?';


qmodels.postStudents = function(data){
    var insertquery =  {
               
        stud_app_date       : helper.methods.GetFormattedDate(data.stud_app_date),
        stud_first_name     : data.stud_first_name,
        stud_last_name      : data.stud_last_name,
        stud_father_name    : data.stud_father_name,
        stud_dob            : helper.methods.GetFormattedDate(data.stud_dob),
        stud_gender         : data.stud_gender,
        stud_rel_caste      : data.stud_rel_caste,
        stud_income         : data.stud_income,
        stud_address        : data.stud_address,
        stud_city           : data.stud_city,
        stud_district       : data.stud_district,
        stud_state          : data.stud_state,
        stud_contact_1      : data.stud_contact_1,
        stud_contact_2      : data.stud_contact_2,
        stud_adhaar_no      : data.stud_adhaar_no,        
        stud_graduate       : data.stud_graduate,
        stud_grad_combi     : data.stud_grad_combi,
        stud_post_grad      : data.stud_post_grad, 
        stud_pg_combi       : data.stud_pg_combi,
        stud_other_qual     : data.stud_other_qual,
        stud_course         : data.stud_course,
        stud_course_batch_time  : data.stud_course_batch_time,
        stud_description    : data.stud_description

    };
    console.log("inserting student information...");
    return insertquery;
};

qmodels.updateStudents = function(data){
    var updatequery = {
        stud_app_date       : helper.methods.GetFormattedDate(data.stud_app_date),
        stud_first_name     : data.stud_first_name,
        stud_last_name      : data.stud_last_name,
        stud_father_name    : data.stud_father_name,
        stud_dob            : helper.methods.GetFormattedDate(data.stud_dob),
        stud_gender         : data.stud_gender,
        stud_rel_caste      : data.stud_rel_caste,
        stud_income         : data.stud_income,
        stud_address        : data.stud_address,
        stud_city           : data.stud_city,
        stud_district       : data.stud_district,
        stud_state          : data.stud_state,
        stud_contact_1      : data.stud_contact_1,
        stud_contact_2      : data.stud_contact_2,
        stud_edu_qual       : data.stud_edu_qual,
        stud_sub_combi      : data.stud_sub_combi,
        stud_course         : data.stud_course,
        stud_description    : data.stud_description
    };
    console.log('updating student information...');
    return updatequery;
}

qmodels.postFaculty = function(data){
    var insertquery =  {
               
        fac_app_date       : helper.methods.GetFormattedDate(data.fac_app_date),
        fac_first_name     : data.fac_first_name,
        fac_last_name      : data.fac_last_name,
        fac_father_name    : data.fac_father_name,
        fac_dob            : helper.methods.GetFormattedDate(data.fac_dob),
        fac_gender         : data.fac_gender,
        fac_rel_caste      : data.fac_rel_caste,
        fac_address        : data.fac_address,
        fac_city           : data.fac_city,
        fac_district       : data.fac_district,
        fac_state          : data.fac_state,
        fac_contact_1      : data.fac_contact_1,
        fac_contact_2      : data.fac_contact_2,
        fac_adhaar_no      : data.fac_adhaar_no,        
        fac_graduate       : data.fac_graduate,
        fac_grad_combi     : data.fac_grad_combi,
        fac_post_grad      : data.fac_post_grad, 
        fac_pg_combi       : data.fac_pg_combi,
        fac_other_qual     : data.fac_other_qual,
        fac_description    : data.fac_description

    };
    console.log("inserting faculty information...");
    return insertquery;
};

exports.sqlquery = queryScript;
exports.datamodel = qmodels;