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

// Get the page for find employee by email
app.get("/find", (request, response)=>{
    response.render("findemployee")
 })

//  Finds an employee with email and renders all the employee data


// Delete an employee


//  Get update page for  employee


//  Add employee


// Update an employee


app.listen(80, ()=>{
    console.log("Server is running at port 80");
})
