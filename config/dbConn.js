let mysql = require('mysql');

var rdb = new Promise(function(resolve, reject){

    let dbConn = mysql.createConnection({
            host: 'localhost',
            user: 'edutrain',
            password: 'password',
            database: 'edu_train'            
        }); 

        dbConn.connect(function(err) {
               if(err){
                   reject(err);
                   console.log('MySQL DB is Not Connected...');
               }else{
                   resolve(dbConn);
                   console.log(`MySQL Database is successfully Connected...`);
               }
          });
});



module.exports.rdb = rdb;