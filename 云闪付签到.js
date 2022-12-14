auto.waitFor()
launchApp("云闪付")
while (true) {
    if (text("我 的").exists()) {
        text("我 的").findOne().parent().click()
        break
    }
}
while (true) {
    if (id("iv_sign_in").exists()) {
        id("iv_sign_in").findOne().click()
        break
    }
}
while (true) {
    if (text("立即签到").exists()) {
        rect = text("立即签到").findOne().bounds()
        press(rect.centerX(), rect.centerY(), 500)
        break
    }
    else if (text("已签到").exists() || text("今日已签到").exists()) {
        break;
    }
}
sleep(1000)
toast("well done");
openAppSetting(getPackageName("云闪付"));
text("强行停止").click();
sleep(1000)
text("强行停止").click();
sleep(1000)
back();
sleep(1000)
toastLog("完成运行");
sleep(1000)
