auto() //需要开启无障碍模式
const wechatPkg = "com.tencent.mm" //微信包名
const redEnvelopes = id("b47") //红包控件
const redPocketText = id("y4") //微信红包
const redPocketGot = id("xs") //红包状态：红包已领取或已被领完
const openIds = id("giq") //红包对话框 - 开

//子线程-监听微信页面
threads.start(function () {
    //不断的查询页面中的控件
    while (true) {
        //非微信应用不处理
        if (!currentPackage().equals(wechatPkg)) continue

        if (redEnvelopes.exists()) {
            //寻找红包控件list
            var redEnvelopes_point = redEnvelopes.find()
            if (redEnvelopes_point.length > 0) {
                log("控件个数=" + redEnvelopes_point.length)

                redEnvelopes_point.forEach(redPocketItem => {
                    //找出微信红包的控件
                    var redText = redPocketItem.findOne(redPocketText)
                    //找红包领取状态的控件
                    var hasGot = redPocketItem.findOne(redPocketGot)
                    log("redText=" + redText + ", hasGot=" + hasGot)
                    //红包对话，左下角：微信红包"y4"，并且没有已领取或已被领完的控件"xs"
                    if (redText != null && hasGot == null) {
                        //红包控件的centerX
                        var redEnvelopes_x = redPocketItem.bounds().centerX()
                        //红包控件的centerY
                        var redEnvelopes_y = redPocketItem.bounds().centerY()
                        toastLog("发现新红包！")
                        click(redEnvelopes_x, redEnvelopes_y)
                        sleep(1000)
                        openBox()
                    }
                    if (redText != null && hasGot != null) {
                        log("红包状态：" + hasGot.text())
                    }
                    //其他条件就不判断了，用不到
                })
            } else {
                //当前界面没有红包  不作任何处理
                log("没有红包")
            }
        } else {
            log("找不到红包控件")
        }
        //睡眠1秒
        sleep(1000)
    }

    function openBox() {
        if (openIds.exists()) {
            openIds.findOne().click()
            toastLog(1000)
            toastLog("返回")
            back()
        } else {
            toastLog("红包已领取或过期")
            back()
        }
    }
})

//子线程-监听通知栏
threads.start(function () {
    //监听通知栏消息
    events.observeNotification()
    events.onNotification(function (notification) {
        log("收到新通知:\n标题: %s, 内容: %s \n包名: %s", notification.getTitle(), notification.getText(), notification.getPackageName())
        if (notification.getPackageName().equals(wechatPkg)) {
            var conversationName = notification.getTitle()
            var content = notification.getText()
            //通知内容，包含“微信红包”
            if (isContains(content, "微信红包")) {
                log("收到: %s发来的的红包", conversationName)
                //点击该通知，进入红包页面
                notification.click()
            }
        }
    })
})

//字符串是否包含
function isContains(str, substr) {
    return str.indexOf(substr) >= 0
}