
const User = require('../models/User');

const getUsers= async (req,res,next)=>{
    try{
        let users = await User.find();
        res.json(users);
    }catch(error){
        res.json({message:error});
    }
   
};

const postUsers = async (req,res,next)=>{
    
    console.log(req.body.lastName);
  
         let user1 = new User({
            email:req.body.email,
            age:req.body.age,
            firstName:req.body.firstName,
            lastName:(req.body.lastName===undefined)?'NA':req.body.lastName
        });
        console.log(user1);
        try{
        
            let savedUser = await user1.save();
            res.json(savedUser);
        }catch(error){
            res.json({message:error});
        }
    
    
    
};

const getUserById = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
}


const updateUserById = async (req,res,next)=>{
    try{
        const updatedUser = await User.updateOne({_id:req.params.userId},{$set:{email:req.body.email,age:req.body.age,firstName:req.body.firstName,lastName:req.body.lastName}})
        res.json(updatedUser);
    }catch(err){
        res.json({message:error});
    }
}

const deleteUserById = async (req,res,next)=>{
    try{
        const deletedUser = await User.remove({_id:req.params.userId})
        res.json(deletedUser);
    }catch(error){
        res.json(error);
    }
}

module.exports = {
    getUsers,
    postUsers,
    getUserById,
    updateUserById,
    deleteUserById
}


