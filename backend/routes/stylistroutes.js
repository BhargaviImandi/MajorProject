const router = require(

"express"

).Router();

router.get(

"/",

(req,res)=>{

res.json([

{

name:"Priya",

specialization:"Hair"

},

{

name:"Anjali",

specialization:"Makeup"

}

]);

}

);

module.exports = router;