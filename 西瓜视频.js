//点击函数
function clickBounds(obj) {
    var bounds = obj.bounds()
    click(bounds.centerX(), bounds.centerY())
}

//右上角进入红包页面
function go2RedPacket() {
    id("ebj").waitFor() //这边wait顾名思义
    clickBounds(id("ebj").findOne())
    //留1秒进入页面的时间
    sleep(2000)
}

//启动西瓜视频
if (!currentPackage().equals("com.ss.android.article.video")) {
    launch("com.ss.android.article.video");
    //等待应用启动
    sleep(3000);
}

//找到首页
if (text("首页").exists() && text("我的").exists()) {
    //要支持的动作
    clickBounds(className("android.widget.RelativeLayout").desc("首页 标签").findOne())
    sleep(1000)
    //红包页
    // go2RedPacket()

    // //任务一
    // //滚动
    // swipe(500, 1000, 100, 20, 1000)
    // //等待控件
    // text("看视频").waitFor()
    // clickBounds(text("看视频").findOne())

    // //等待5个视频观看结束
    // sleep(5 * 30 * 1000)

    //红包页,继续下一个任务
    go2RedPacket()

    //任务二, 循环诗词
    for (var index = 0; index < 100; index++) {
        //滚动
        swipe(100, 900, 100, 10, 1000)
        //等待控件
        if (text("领取").exists() && text("每日任务").exists()) {
            clickBounds(text("领取").findOne())
            console.log("找到任务领取啦!");
            console.log(text("领取").findOne().desc())
            break
        }
        sleep(1000)
    }


}



