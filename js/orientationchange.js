$(document).ready(function(){
    #(window).bind('orientationchange', function(e){
	if (e.orientaion === 'portrait'){
	    window.alert('縦置きです');
	} else {
	    window.alert('横置きです');
	}
    });
});
