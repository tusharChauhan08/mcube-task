let {taskModel, userModel} = require('../model/main.model');
let bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'abs'

// This is the create user method for adding the user who can access our api 
let createUser = async(req, res, next) => {
    try{
        let {name, email, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 12);
        let data = new userModel({
            name: name,
            email: email,
            password: hashPassword,
        });
        await userModel.insertMany([data])
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        })
    }
    catch(error){
        console.log(error);
    }
}

// This is for login the user so we can access the api through the authentication
let userLogin = async(req, res, next) => {
    try{
        let {email, password} = req.body;
        let query = {
            email:email,
        }
        let result = await userModel.find(query);
        if (result){
            if (bcrypt.compareSync(password, result[0].password)){
                const token =  jwt.sign({id:result[0]._id},secret,{expiresIn:'1d'});
                console.log(`Bearer ${token}`); 
                res.status(200).json({result});
            }
            else{
                res.status(401).json("Password Not Matched");
            }
        }
        else{
            res.status(404).json("User is not register.");
        }
    }
    catch(error){
        console.log(error);
    }

}

// This is for the add task
let addTask = async(req, res, next) => {

    try{
        let {taskTitle, description, taskDate, startTime, endTime, status} = req.body;
        let data = new taskModel({
            taskTitle,
            description,
            taskDate,
            startTime,
            startTime,
            endTime,
            status,
        })
        await taskModel.insertMany([data]).
        then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    catch(error){
        console.log(error);
    }
}


// This is for the fetch all the task into the database
let fetchData = (req, res, next) => {  
    try{
        taskModel.find({})
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    catch(error){
        console.log(error);
    }
}


// This is for the particular data to fetch from the database base on the id
let particularFetch = (req, res, next) => {
    try{
        console.log(req.params.id);
        let data = {
           _id : req.params.id
        }
        taskModel.find(data)
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        })
    }
    catch(error){
        console.log(error);
    }
}


// This is for the update to the particular field not all the field because i use the patch method.
let updateTask = async(req, res, next) => {
    try{
        let {taskTitle, description, taskDate, startTime, endTime, status} = req.body;
        console.log('tthihs')
        console.log(req.params.id);
        let query = {
            _id : req.params.id
        }
        let data = {$set:{
            taskTitle,
            description,
            taskDate,
            startTime,
            startTime,
            endTime,
            status,
        }}
        await taskModel.updateOne(query, data)
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    catch(error){
        console.log(error);
    }
}

// This is for the deletion of the task
let deleteTask = (req, res, next) => {
    try{
        let data = {
            _id : req.params.id
        }
        Book.deleteOne(data)
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {
    createUser,
    userLogin,
    addTask,
    fetchData,
    particularFetch,
    updateTask,
    deleteTask
}