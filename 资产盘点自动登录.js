//确保无障碍已开启
auto();

//启动资产盘点
launch("com.seuic.assetsmanager.debug");
console.log("启动固资app");
//用户名, findOne是阻塞型的
var etUsername = id("etUsername").findOne();
etUsername.setText("zhoutian");
console.log("输入账号");
//密码
var etPassword = id("etPassword").findOne();
etPassword.setText("123");
console.log("输入密码");
//登录
id("tvLogin").findOne().click();
console.log("登录");


