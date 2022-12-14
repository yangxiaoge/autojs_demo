//子线程，自动授权截屏权限
threads.start(function () {
    while (true) {
        if (text("允许").findOnce()) {
            text("允许").findOnce().click()
            break
        } else {
            sleep(2000)
        }
    }
});

//请求截图
//每次使用该函数都会弹出截图权限请求，建议选择“总是允许”。
if (!requestScreenCapture()) {
    toastLog("请求截图失败");
    exit();
}
sleep(1000)
var curtime = new Date()
var picName = curtime.getTime() + ".png"
var result = images.captureScreen("/sdcard/" + picName)
//img.saveTo("/sdcard/" + picName)
if(result){
    toastLog("截图保存完成！")
}else{
    toastLog("截图保存失败！")
}


