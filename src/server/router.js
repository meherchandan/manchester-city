const express = require('express');

const router = express.Router();
const Matches  = require('./db/models/Matches');
const Promotions = require('./db/models/Promotions')
const Users = require('./db/models/Users');
const jwt = require('jsonwebtoken')
router.get('/matches',(req,res)=>{
    Matches.query()
    .orderBy('date','desc')
    .limit(6)
    .then(matches => {
        console.log(matches);
        res.json(matches)
    })
})

 router.post('/addPromotionEmail',async (req,res)=>{
     if(!req.body.email){
         return res.json({message:"No email address sent."});
     }
    const promotions = await Promotions.query()
            .findOne({
                email:req.body.email
            });
    if(!promotions){
        await Promotions.query()
        .insert({
            email:req.body.email
        });
        res.json({message:"Email added successfully."})
    }
    else{
        res.json({message:"Email already enrolled."})
    }
    


})

router.post('/signin',async (req,res)=>{
    const { username, password } = req.body;
    console.log(req.body)
    if(!username){
        return res.json({message:"No email address sent."});
    }
    
    const user = await Users.query()
        .findOne({
            useremail:username,
            active:true
        });
        if(!user){
            res.status(403);
            return res.send({error:"Invalid username/password"});
        }
    const passwordValid = await user.verifyPassword(password);
    if(passwordValid){
        const token = generateAuthToken(username);
        console.log(token);
        res.json({token});
    }
    else{
        res.status(403);
        res.json({error:"Invalid username/password"});
    }
})

router.post('/adduser',async (req,res)=>{
    const { username, password } = req.body;
    if(!username){
        return res.json({message:"No email address sent."});
    }
    
    const user = await Users.query().insert({
        useremail: username,
        password: password,
        active:true
    });
    if(user){
        res.json({message:"User added successfully."})

    }
    else{
        res.json({message:'user is not added'});
    }
    

})

const generateAuthToken = (email)=>{
    const token = jwt.sign({email: email}, process.env.JWT_KEY)
    return token;

}
module.exports = router;