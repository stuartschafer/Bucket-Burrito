// Import the ORM for functions that will interact with the database.
var orm = require("../config/orm.js");

var burrito = {
    all: function(callback) {
        orm.all("wish_list", function(res) { callback(res) });
    },
    update: function(setToTrue, condition, callback) {
        orm.update("wish_list", setToTrue, condition, function(res) { callback(res) });
    },
    create: function(range, vals, callback) {
        orm.create("wish_list", range, vals, function(res) { callback(res) });
    }
}

module.exports = burrito;