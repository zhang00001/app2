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
//往表单插入100行
for (var i = 0; i < 100; i++) {
    var row = table.insertRow();
    row.textContent = "新增一行";
    var _a = [parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + '')
    ], r = _a[0], g = _a[1], b = _a[2];
    row.style.background = "#" + r + g + b;
}
//# sourceMappingURL=1.js.map