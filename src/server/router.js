const express = require('express');

const router = express.Router();
const Matches  = require('./db/models/Matches');
const Teams  = require('./db/models/Teams');
const Players = require('./db/models/Players');
const Promotions = require('./db/models/Promotions')
const Users = require('./db/models/Users');
const jwt = require('jsonwebtoken')
const  auth =require ('./middleware/auth');
router.get('/matches',(req,res)=>{
    let count = req.query.count||6;
    Matches.query()
    .orderBy('date','desc')
    .limit(count)
    .then(matches => {
        res.json(matches)
    })
})
router.get('/matches/:id',(req,res)=>{
    const id =  parseInt(req.params.id);
    Matches.query()
    .orderBy('date','desc')
    .where("id","=",id)
    .then(match => {
        console.log("matches",match);
        res.json(match)
    })
})

router.post('/updatematch/:id',(req,res)=>{
    const id =  parseInt(req.params.id);
    Matches.query().patchAndFetchById(id,{
        ...req.body.match
    })
    
    .then(match => {
        console.log("matche",match);
        res.json(match)
    })
})
router.post('/addmatch',(req,res)=>{
    Matches.query().insert({
        ...req.body.match
    })
    
    .then(match => {
        console.log("match",match);
        res.json(match)
    })
})
router.get('/players',(req,res)=>{
    Players.query()
    .orderBy('lastname','asc')
    .then(players => {
        res.json(players)
    })
})
router.get('/teams',(req,res)=>{
    Teams.query()
    .orderBy('name','asc')
    .then(team => {
        console.log(team);
        res.json(team)
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
        const token = generateAuthToken(username,password);
        console.log(token);
        res.json({token});
    }
    else{
        res.status(403);
        res.json({error:"Invalid username/password"});
    }
})
router.get('/checkvalidtoken',auth,(req,res)=>{
    if(req.user){
        res.status(200).end();
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

const generateAuthToken = (email,password)=>{
    const token = jwt.sign({email,password}, process.env.JWT_KEY)
    return token;

}
module.exports = router;