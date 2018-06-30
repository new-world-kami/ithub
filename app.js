// app.js的作用
//程序入口
//负责：1.配置  2.监听端口
const express = require('express');
//导入处理模板的模块
const expressarttemplate=require('express-art-template');

const router = require('./routes/router');

const bodyParser = require('body-parser');
const app = express();


const POST = 5000;
//监听端口
app.listen(POST,() => {
  console.log('监听5000');
  
})

//处理静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
//配置模板引擎
app.engine('html',expressarttemplate);
//配置 bodyParser
// parse application/x-www-form-urlencoded
// name=zs$pwd=123
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// { "name":"zs","age":18}
// app.use(bodyParser.json());


//注册路由
app.use(router);