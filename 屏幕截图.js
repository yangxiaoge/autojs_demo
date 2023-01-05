//子线程，自动授权截屏权限
threads.start(function () {
    while (true) {
        if (text("立即开始").findOnce()) {
            text("立即开始").findOnce().click()
            break
        } else {
            sleep(1000)
        }
    }
});

//请求截图
//每次使用该函数都会弹出截图权限请求，建议选择“总是允许”。
if (!requestScreenCapture()) {
    toastLog("请求截图失败");
    exit();
}
//截屏弹窗授权后，等待一会才能captureScreen
sleep(1000)

//创建本次截屏文件
var curtime = new Date()
var picName = curtime.getTime() + ".png"
var filePath = files.getSdcardPath() + "/aaa/" + picName
var createFileResult = files.createWithDirs(filePath)
if (createFileResult) {
    console.log("文件创建成功！");
} else {
    console.log("文件创建失败！");
}

//开始截屏
var result = images.captureScreen(filePath)
//img.saveTo("/sdcard/" + picName)
if (result) {
    toastLog("截图保存完成！")
    toastLog(filePath)

    //ocr识别-实验性
    let res = paddle.ocrText(images.read(filePath));
    toastLog("ocr识别结果：\n" + JSON.stringify(res))
} else {
    toastLog("截图保存失败！")
}


