const verifyEmail = function(req,res,next){
    const email = req.body.email ;

    if (!email) {
        return res.status(400).json({
            msg: "Email is required"
        })
    }

    // check it contains "@" ?

    const atIndex = email.indexOf('@');
    if(atIndex == -1){
        return res.status(400).json({
            msg : "Email must contain '@' symbol"
        })
    }


    //local part := part before "@"

    const localPart = email.substring(0,atIndex);
    if(localPart.length == 0){
        return res.status(400).json({
            msg : "Email must contain local part before '@'"
        })
    }


    // domain part := part after "@"

    const domainPart = email.substring(atIndex+1);
    if(domainPart.length == 0){
        return res.status(400).json({
            msg : "Email must contain domain part after '@'"
        })
    }


    // dotIndex := domain part must contain dot

    const dotIndex = domainPart.indexOf('.');
    if(dotIndex == -1){
        return res.status(400).json({
            msg : "Email must contain '.' symbol"
        })
    }


    // extensionPart := after dot part

    const extensionPart = domainPart.substring(dotIndex + 1);
    if(extensionPart.length <2 || extensionPart.length > 6){
        return res.status(400).json({
            msg : "Email domain extension must be between 2 - 6 characters"
        })
    }

    if (domainPart.includes('..') || domainPart.startsWith('.') || domainPart.endsWith('.')) { // changed (combined check)
        return res.status(400).json({
            msg: "Email domain cannot contain consecutive dots, or start or end with a dot"
        });
    }


    next();
    
}

const verifyUserName = function(req,res,next){
   
    const userName = req.body.userName ;
    
    if (!userName) {
        return res.status(400).json({
            msg: "Username is required"
        })
    }

    // username length can vary between 3 - 20

    if(userName.length <3 || userName.length>20){
        return res.status(400).json({
            msg: "Username length must be between 3 - 20"
        })
    }

    //username must contain upper and lower case

    for(let i=0;i<userName.length;i++){
        const char = userName[i];

        if(!(char >= 'a' && char <= 'z') && !(char >='A' && char <= 'Z')){
            return res.status(400).json({
                msg: "Username can only contain uppercase and lowercase letters"
            })
        }
    }


    next();
}

const verification = function(req,res,next){
    
}

const strongPassword = function(req,res,next){
   
    const password = req.body.password ;
    
    if (!password) {
        return res.status(400).json({
            msg : "Password is required"
        })
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let hasSpecialChar = false;


    // password must contain upper case, lower case , special character , digit
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if ('$@'.includes(char)) {  
            hasSpecialChar = true;
        }
    }

    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        next();  // If all conditions are satisfied, move to the next middleware
    } else {
        return res.status(400).json({
            msg : "password must contain upper case, lower case , special character , digit"
        })
    }



}

module.exports={verifyEmail , verifyUserName , verification , strongPassword}