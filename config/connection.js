// Setup code to connect Node to MySQL.
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "192.168.99.100",
    port: 3306,
    user: "root",
    password: "docker",
    database: "burgers_db"
  });
};

// Make the connection.
connection.connect(function (err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;
