"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n    Todo ID: " + ID + "\n    Title: " + title + "\n    Is it finished? " + finished + "\n  ");
});
