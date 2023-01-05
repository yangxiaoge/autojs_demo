console.show()

//前提是AutoX.js是打了系统签名的。
var mdmSpFilePath = "data/data/com.seuic.mobiledevicemanager/shared_prefs/cache.xml"
//文件路径必须以“/”开头
if (!mdmSpFilePath.startsWith("/")) {
    mdmSpFilePath = "/" + mdmSpFilePath
}
var content = files.read(mdmSpFilePath)
console.log(content);