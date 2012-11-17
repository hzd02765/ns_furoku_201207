$(function(){
    var add_elm = '<div data-role="fieldcontain">/r<label for="index_url">URL：</label>\r<input id="index_url" name="index_url" type="url" value="" />\r</div>';
    $(add_elm).appendTo('#index_body').trigger('create');
});
