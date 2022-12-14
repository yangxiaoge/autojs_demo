auto();

events.observeNotification();
events.onNotification(function(notification){
    log(notification);
    
});