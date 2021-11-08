const express = require('express')
const app = express()
const nameJson = require('./person.json')

app.use(express.static("public"))

app.get('/' , function(req , res){
  res.send('Welcome' + nameJson.name )
})

app.get('/about.html' , function(req , res){
    console.log("abut")
    res.send('abut')
  })

  app.get('/contact_us.html' , function(req , res){
    res.send('contact_us')
  })


app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
})
app.use((req, res) => {
    res.send("Sorry! Can't find that resource. Please check your URL");
  });