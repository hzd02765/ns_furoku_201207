$(document).bind('moibleinit', function(){
    $.mobile.listview.prototype.options.filterCallback = function(text, searchValue){
	return text.toLowerCase().indexOf(searchValue) !== 0
    };
});
