const express = require('express');

const app = express();


const POST = 3000;
//监听端口
app.listen(POST,() => {
  console.log('监听3000');
  
})

app.get('/',(req,res) => {
  res.send('hello express');
})