//参数：http://doc.autoxjs.com/#/app?id=appintentoptions 

//发送广播 给mdm，重启设备
// app.sendBroadcast({
//     action: "android.intent.action.test",
//     packageName: "com.seuic.mobiledevicemanager",
//     extras: {
//         reboot: true
//     }
// })

//adb shell am broadcast -a com.seuic.mobiledevicemanager.test.input --es text 嘿嘿 --ez isText true

//发送广播，焦点输入
app.sendBroadcast({
    action: "com.seuic.mobiledevicemanager.test.input",
    packageName: "com.seuic.mobiledevicemanager",
    extras: {
        isText: true,
        text: "嘿嘿"
    }
})