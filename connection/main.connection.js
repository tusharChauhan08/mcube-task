let mongoose = require('mongoose');

let connection = mongoose.connect('mongodb://127.0.0.1:27017/TaskManagement')
.then(() => {
    console.log("Server is started.");
})
.catch((err) => {
    console.log(err);
});

module.exports = connection;