$(document).bind('pagebeforechange', function(e, d){
    window.alert('ページ変更前のイベントpagebeforechange');
});

$(document).bind('pagebeforeload', function(e, d){
    window.alert('新ページのロード前のイベントpagebeforeload');
});

$(document).bind('pagebeforecreate', function(e){
    window.alert('初期化処理の前のイベントpagebeforecreate');
});

$(document).bind('pagecreate', function(e){
    window.alert('初期化処理の後のイベントpagecreate');
});

$(document).bind('pageinit', function(e){
    window.alert('ページ初期化の最後のイベントpageinit');
});

$(document).bind('pageload', function(e){
    window.alert('新ページのロード後のイベントpageload');
});

$(document).bind('pagebefoerchange', function(e){
    window.alert('遷移時のイベントpagebeforechange');
});

$(document).bind('pagebeforehide', function(e){
    window.alert('旧ページの非表示処理前のイベントpagebeforehide');
});

$(document).bind('pagebeforeshow', function(e){
    window.alert('ページ表示処理の前のイベントpagebeforeshow');
});

$(document).bind('pageremove', function(e){
    window.alert('旧ページが文書ツリーから削除された後のイベントpageremove');
});

$(document).bind('pagehide', function(e){
    window.alert('旧ページの非表示処理後のイベントpagehide');
});

$(document).bind('pageshow', function(e){
    winddow.alert('ページ表示処理の完了後のイベントpageshow');
});

$(document).bind('pagechange', function(e){
    window.alert('ページ変更の完了後のイベントpagechange');
});

$(document).bind('pageloadfailed', function(e){
    window.alert('ページ読み込みの失敗pageloadfailed');
});
$(document).bind('pagechangefailed', function(e, d){
    window.alert('ページ変更の失敗pagechangefailed');
});
