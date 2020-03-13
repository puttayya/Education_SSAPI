const db_model = require('../models/query_model');
const dbConn = require('../config/dbConn');
const util = require('../models/helper');
const myfunctions = {};

myfunctions.getFaculties = function (req, res, next) {
    dbConn.rdb.then(function(con_rdb){
           con_rdb.query(db_model.sqlquery.getAllFaculty, function (error, results, fields) {
            if (error) {
                console.log(error);
                res.send(util.methods.seterror(error));
                return;
            } else
                res.send(util.methods.setresponse(results));
                // res.send((results));
            });
    }).catch(err => {
        console.log(err);
        res.send(util.methods.seterror(error));
        return;
    });
        
}

myfunctions.postFaculty = function(req, res, next) {
    dbConn.rdb.then(function(con_rdb){
        con_rdb.query(db_model.sqlquery.insertFaculty, db_model.datamodel.postFaculty(req.body), function(error, results, fields){
            if(error){
                console.log(error);
                res.setHeader("Content-Type","application/json");
                res.send(util.methods.seterror(error));
                return;
            }else{
                res.setHeader("Content-Type","application/json");
                res.send(util.methods.setresponse(results));
            }
        });
    }).catch(err => {
        console.log(err);
        res.send(util.methods.seterror(error));
        return;
    });
}

// myfunctions.updateStudents = function(req, res, next){
//     dbConn.rdb.then(function(con_rdb){
//         con_rdb.query(db_model.sqlquery.updateStudents, req.params.stud_id,function(error, results, fields){
//             if(error){
//                 console.log(error);
//                 res.setHeader("Content-Type","application/json");
//                 res.send(util.methods.seterror(error));
//                 return;
//             }else{
//                 res.setHeader("Content-Type","application/json");
//                 res.send(util.methods.setresponse(results));
//             }
//         });
//     }).catch(err=>{
//         console.log(err);
//         res.send(util.methods.seterror(error));
//         return;
//     });
// }

// myfunctions.updateAddress = function(req, res, next){
//     dbConn.rdb.then(function(con_rdb){
//         con_rdb.query(db_model.sqlquery.updateAddress, req.params.stud_id, [db_model.datamodel.updateStudents(req.body), req.body.stud_address] ,function(error, results, fields){
//             if(error){
//                 console.log(error);
//                 res.setHeader("Content-Type","application/json");
//                 res.send(util.methods.seterror(error));
//                 return;
//             }else{
//                 res.setHeader("Content-Type","application/json");
//                 res.send(util.methods.setresponse(results));
//             }
//         });
//     }).catch(err=>{
//         console.log(err);
//         res.send(util.methods.seterror(error));
//         return;
//     });
// }

// myfunctions.deleteStudents = function (req, res, next) {
//     dbConn.rdb.then(function (con_rdb) {
//         con_rdb.query(db_model.sqlquery.deletestudents, req.params.stud_id, function (error, results, fields) {
//             if (error) {
//                 console.log(error);
//                 res.setHeader("Content-Type", "application/json");
//                 res.send(util.methods.seterror(error));
//                 return;
//             } else {
//                 res.setHeader("Content-Type", "application/json");
//                 res.send(util.methods.setresponse(results));
//             }
//         });
//     }).catch(err => {
//         console.log(err);
//         res.send(util.methods.seterror(error));
//         return;
//     });
// }

module.exports.caller = myfunctions;