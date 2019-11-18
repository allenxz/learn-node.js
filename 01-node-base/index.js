const express = require('./myExpress')
const app = express()
app.get('/',(req,res) => {
  res.end('hello world!')
})

app.get("/users",(req, res) => {
  res.end(JSON.stringify({name:'zhangsan'}))
})

app.listen(3000, ()=>{
  console.log('App listen at 3000')
})