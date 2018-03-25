/**
 * Created by kraiba on 16/08/2016.
 */
function ajaxPostReact(url, dataPost, reactThis, success) {
$.ajax({
    type:"POST",
    url:url,
    data:dataPost,
    dataType:"json",
    cache:false,
    success:function (data) {
        success.call(this,data);
    }.bind(this),
    error:function (data) {

    }.bind(this)

})
}