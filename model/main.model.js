let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    password : {type:String, required:true},
});

let userModel = new mongoose.model('user', userSchema);

let taskSchema = new mongoose.Schema({
    taskTitle: {type:String, required:true},
    description: {type:String, required:true},
    taskDate: {type:Date, required:true},
    startTime: {type:String, required:true},
    endTime: {type:String, required:true},
    status: {type:String, required:true},
});

let taskModel = new mongoose.model('Task', taskSchema);

module.exports = {
    userModel, 
    taskModel,
}