const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

// Get index Page
app.get("/", (request, response)=>{
    response.render("index")
})

// Get the page for find user by id 
app.get("/find", (request, response)=>{
    response.render("findUser")
 })

//  Finds a user with id and renders all the user data


// Delete a user


//  Get update page for  user


//  Add user


// Update a user


app.listen(80, ()=>{
    console.log("Server is running at port 80");
})
