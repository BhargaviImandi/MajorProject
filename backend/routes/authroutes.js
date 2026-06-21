const router = require(

"express"

).Router();

router.post(

"/login",

(req,res)=>{

res.json({

message:"Login Success"

});

}

);

router.post(

"/register",

(req,res)=>{

res.json({

message:"Registration Success"

});

}

);

module.exports = router;