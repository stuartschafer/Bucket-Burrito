// This is for the MySQL connection
var connection = require("../config/connection.js");

var orm = {
    all: function(table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    update: function(table, setToTrue, condition, callback) {
        var queryString = "UPDATE " + table + " SET " + setToTrue + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    create: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "');"
        console.log("~~~~~~~~~~~~~~~~~~~~");
        console.log(queryString);
        console.log("~~~~~~~~~~~~~~~~~~~~");
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}



module.exports = orm;