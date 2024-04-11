const jwt = require('jsonwebtoken')
const secret = 'abs'
function verifytoken(req,res,next){
    const headers = req.headers['authorization'];
    if (!headers) return res.status(404).send("token not found");
    const bearer = headers.split(" ");
    const token = bearer[1];
    
    try {
        const user = jwt.verify(token, secret); 
        req.userId = user.id;
        next();
    } catch (error) {
        return res.status(401).send("Invalid token"); 
    }
}


module.exports = verifytoken