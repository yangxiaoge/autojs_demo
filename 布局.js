"ui";

ui.layout(
    <vertical>
        <button id="download" text="下载图片" />
        <button text="第二个按钮" />
    </vertical>
);

ui.download.click(function () {
    //子线程下载
    threads.start(function () {
        var img = images.load("https://pics4.baidu.com/feed/902397dda144ad34df9cdf46c51e69ff30ad8513.png@f_auto?token=878525d7721f868acd43d24cd507c2a9");
        img.saveTo("/sdcard/download_test1.png");
    });
});
