auto();

events.observeToast();
events.onToast(function(toast){
    log("Toast内容: " + toast.getText() + " 包名: " + toast.getPackageName());
});