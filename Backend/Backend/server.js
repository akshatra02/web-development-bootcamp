import express from "express";
// import createApplication from "express/lib/express";
// const express=require("express")
// 2.configuration
const app=express();
// middleware 
app.use(express.json());
// database
const users=[
    {name:"aksh",age:20,id:1},
    {name:"tej",age:21,id:2},
    {name:"madhu",age:22,id:3},
]
// 3.route handling
app.get("/api/users",(req,res)=>{
    try{
 res.status(200).json(users)
}
catch(err){
    res.status(500).json({message: err.message});
    
}})
// port creation
const port=5000;
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
}
)

// single user get
//query
app.get("/api/user",(req,res)=>{
    try{
        
        const i=users.find((c)=>c.id===Number(req.query.id))
        res.status(200).json(i)
}
catch(err){
    res.status(500).json({message: err.message});
    
}})
//params
app.get("/api/users/:id",(req,res)=>{
    try{

        const i=users.find((c)=>c.id===Number(req.params.id))
        res.status(200).json(i)
}
catch(err){
    res.status(500).json({message: err.message});
    
}})
//body
app.get("/api/user",(req,res)=>{
    try{

        const i=users.find((c)=>c.id===req.body.id);
        res.status(200).json(i)
}
catch(err){
    res.status(500).json({message: err.message});
    
}})

// post
app.post("/api/user/create",(req,res)=>{
    try{
        const newData={
            id:users.length+1,
            name:"sruthika"
        }
        users.push(newData);
        res.json(users);
}
catch(err){
    
}})