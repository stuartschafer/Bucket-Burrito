var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burrito_bucket"
});
}

// Make connection
connection.connect(function(err) {
   if (err) {
     console.error("Error connecting: " + err.stack);
     return;
   }
   console.log("Connected as id " + connection.threadId);
  });
 
// Export connection for orm.js file
module.exports = connection;