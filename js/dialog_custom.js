$(document).bind('mobileinit', function(){
    $.mobile.dialog.prototype.options.closeBtnText = '閉じる';
});

$('#linkpg').live('pageinit', function(){
    $('#linkpg_ok').click(function(){
	$('.ui-dialog').dialog('close');
    });
});
