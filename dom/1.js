// // BOM Browser Object Model 浏览器对象模型   来访问和操作浏览器窗口
// window.close();  //关闭浏览器窗口   close 方法  closed  属性
// window.closed;  //false
// alert === window.alert;  //true
// window.history.back //返回历史  forget  前进  go(1) 前进一步
// //紫色方法  蓝色属性
// location //位置对象
// location.host //主机加端口
// location.href //当前地址
// location.protocol  //拿到地理位置
// screen.height  //屏幕高
var table = document.getElementById('table');
for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows.item(i);
    if (i % 2 == 0) {
        row.style.background = "blue";
    }
}
//# sourceMappingURL=1.js.map