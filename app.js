/**
 *  Created by daiwenjuan on 2020/3/3 09:42.
 */
// 定义自己的事件
$(document).ready(function() {
  $("#btn").click(function() {
    var e = jQuery.Event("myClick");
    $("#btn").trigger(e);
  });
  $("#btn").bind("myClick", function(event) {
    console.log(event);
  });
});
