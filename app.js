const express = require("express");
const expressLayout = require("express-ejs-layouts")
const port =process.env.Port || 3000;
const app=express();
const path = require('path');


const viewDir = path.join(__dirname,'resources/views');

app.use(express.static('public'));

// setting template engine ejs
app.use(expressLayout);
app.set('views',viewDir);
app.set('view engine','ejs');


require("./routes/web")(app);

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Listening to port : ${port}`);
    }
})




