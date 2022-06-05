const router = require("express").Router();
const User = require("../models/user");



//create a user
router.post("/",async(req,res)=>{
    const newUser = new User(req.body);
    try{
        const saveUser = await newUser.save();
        res.status(200).json(saveUser)

    }catch (err) {
        res.status(500).json(err)
    }
});


//get all users 
router.get("/allusers",  async (req,res)=>{
    try {
    const alluser = await User.find()
   
    res.status(200).json(alluser);
    } catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
})



//GET USER
router.get("/:id" ,async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {...others} = user._doc

        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
});

  module.exports = router