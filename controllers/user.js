
const md5 = require('md5');
const userModel = require('../models/users')


// 1展示登录页面
// 2处理登录逻辑
// 3展示注册页面
// 4处理注册逻辑
//5 退出

exports.showSignin = (req,res) => {
  // res.send('showsignin');
  res.render('signin.html');
  db.query()
}
exports.handleSignin = (req,res) => {
  // res.send('handleSignin');
  // 2.1 验证用户的输入
  // TODO
  // 2.2 验证邮箱和密码是否正确
 

}
exports.showSignup = (req,res) => {
  // res.send('showSignup');
  res.render('signup.html');
}
exports.handleSignup = (req,res) => {
  //添加数据之前，要做数据验证
  //TODO 验证数据是否验证

  //验证邮箱是否重复
  userModel.getByEmail(req.body.email,(err,user) =>{
    if(err) {
      return res.send('服务器内部错误');
    }
    //验证昵称
    userModel.getByNickname(req.body.nickname,(err,user)=>{
      if(err){
        return res.send('服务器内部错误');
      }
      req.body.createdAt = new Date();
      req.body.password = md5(req.body.password);
      //插入用户
      userModel.creatUser(req.body,(err,isok) =>{
        if(isok) {
          res.redirect('/signin');
        }else {
          res.render('/signup',{
            msg:'注册失败'
          })
        }
      });
    })
  })

}
exports.handleSignout = (req,res) => {
  res.send('handleSignout');
}