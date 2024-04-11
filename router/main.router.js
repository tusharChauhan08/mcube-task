let express = require('express');
let router  = express.Router();
let {createUser, userLogin, addTask, updateTask, deleteTask, fetchData, particularFetch} = require('../controller/main.controller');
const verifytoken = require('../middleware/authentication')

router.post('/user',createUser)
router.post('/login',userLogin)
router.post('/', verifytoken,addTask);
router.get('/', verifytoken,fetchData);
router.get('/:id', verifytoken,particularFetch);
router.patch('/:id', verifytoken,updateTask);
router.delete('/:id',verifytoken, deleteTask);
module.exports = router;