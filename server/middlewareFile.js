const verifyEmail = function(req,res,next){
    let flag = false;
    const email = req.body.email ;




    if(flag==false){
        res.status(400).json({
            msg : "error in email"
        })
    }else{
        next();
    }
}

const verifyUserName = function(req,res,next){
    let flag = false;
    const userName = req.body.userName ;
    



    if(flag==false){
        res.status(400).json({
            msg : "error in userName"
        })
    }else{
        next();
    }
}

const verification = function(req,res,next){
    
}

const strongPassword = function(req,res,next){
    let flag = false;
    const password = req.body.password ;
    



    if(flag==false){
        res.status(400).json({
            msg : "error in password"
        })
    }else{
        next();
    }
}

module.exports={verifyEmail , verifyUserName , verification , strongPassword}