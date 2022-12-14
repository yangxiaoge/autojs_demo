// engines.execScript('测试引擎', 'toast("你好啊")', {
//     delay: 2000,
//     loopTimes: 3,
//     interval: 3000
// })

function fun() {
    toast('你好')
}
engines.execScript('测试',  "fun();\n" + fun.toString());