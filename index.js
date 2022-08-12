
/// Importing some Modules 

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const mongoose = require("mongoose");







//Creating our app
const app = express(); 



// Setting up EJS
app.set('view engine', 'ejs'); 
app.use(express.static("public"));


//Setting up bodyParser
//Remember to use bodyparser for the passage of the data in ejs
app.use(bodyParser.urlencoded({extended:true})); 


//Connecting with mongoose
mongoose.connect("mongodb+srv://Tanmaydeep:tanmay@cluster1.vcm3w.mongodb.net/Testdata", {useNewUrlParser:true});




//Creating a schema
const userSchema= {
    message:String,
};








const Message = new mongoose.model("Message", userSchema); 



// Setting home Route
// app.get("/",(req,res)=>{
//     res.render('index');
// });





app.get("/",(req,res)=>{
    Message.find({}, function(err, newData){
        res.render("index", {
          posts:newData
        });
    });
});


app.get("/",(req,res)=>{
    Message.find({}, function(err, posts){
        res.render("index", {
          message:msg,
        });
    });
});







app.get("/message",(req,res)=>{

    res.render('message')

});



app.post("/message",(req,res)=>{

    msg= req.body.msg; //Parsing data from message page
    
    const newData = new Message({      //Parsing data to Message Schema.
        message: msg,
    });


    newData.save()

    res.redirect('/')

})



// app.get("/blog",(req,res)=>{
//     Writer.find({}, function(err, newData){
//         res.render("blog", {
//           posts:newData
//         });
//     });
// });



app.listen(3000,
    console.log('Server Up')
) 








