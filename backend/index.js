const express = require("express");
const app = express();
const notes = require("./data/note.js");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{ 
    res.send("App Is Ruynning")
});
app.get("/api/notes",(req,res)=>{
    res.json(notes)
})
app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>{
        
        return n.userId == req.params.id
        
    })
    res.send(note)
})
app.listen(PORT,console.log("Server Started on Port 5000"))