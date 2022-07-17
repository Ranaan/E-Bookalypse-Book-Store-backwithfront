const {validationResult} = require("express-validator")

module.exports = (req,res,next)=>{
    let result = validationResult(req);
 
    if(!result.isEmpty()){
        let errparam = result.errors[0].param

        let errmsg = result.errors[0].msg
        let err = new Error(errparam  +" " +   errmsg)
        err.status = 422
        next(err)
        // console.log(errmsg)
    }else{
        next()
    }
}