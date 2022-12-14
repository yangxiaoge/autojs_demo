//确保无障碍已开启
auto();

//启动资产盘点
launch("com.seuic.assetsmanager.debug");
//用户名, findOne是阻塞型的
var etUsername = id("etUsername").findOne();
etUsername.setText("zhoutian");
//密码
var etPassword = id("etPassword").findOne();
etPassword.setText("123");
//登录
id("tvLogin").findOne().click();


