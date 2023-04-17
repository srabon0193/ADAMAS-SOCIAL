import { createRequire } from 'module';
const require = createRequire(import.meta.url);

 //import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",

//   databse: "social"

// });



const mysql = require('mysql')
  
export const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database : "social"
})
  
// Connecting to database
// connection.connect(function(err) {
//     if(err){
//       console.log("Error in the connection")
//       console.log(err)
//     }
//     else{
//       console.log(`Database Connected`)
//       connection.query(`SHOW DATABASES`, 
//       function (err, result) {
//         if(err)
//           console.log(`Error executing the query - ${err}`)
//         else
//           console.log("Result: ",result) 
//       })
//     }
// })