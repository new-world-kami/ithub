//route  路由规则
//route 路由对象

//router.js 职责 设置路由规则


const express =require('express');

const indexCtrl = require('../controllers/index');
const categoryCtrl = require('../controllers/category');
const topicCtrl = require('../controllers/topic');
const userCtrl = require('../controllers/user');
//创建路由对象
const router = express.Router();

//导出路由模块
module.exports=router;


//设置路由规则

//1.index.js 不需要登录处理功能
router.get('/',indexCtrl.showIndex)

//2 user.js 登录 注册 退出
router
  .get('/signin',userCtrl.showSignin)
  .post('/signin',userCtrl.handleSignin)
  .get('/signup',userCtrl.showSignup)
  .post('/signup',userCtrl.handleSignup)
  .get('/signout',userCtrl.handleSignout)
