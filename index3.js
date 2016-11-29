// $('#demo').click(()=>{
//     alert('this is a deom');
// })
//jq对象的方法
//$('#demo').
//dom对象的方法
// //将dom 转jq对象
// var demo = document.getElementById('demo');  //返回dom元素对象
// var $demo = $(demo);
// //将jq对象转化dom对象
// var dom = $demo.get(0);
// var dom2 = $demo[0];
//层次选择器
//$('body div')  所有子类
/**
 *  *body
 *      * div1
 *      * div2
 *          * div21
 *          * div22
 *          * div23
 *      * div3
 * $('body>div')只会选择body 下一层的div元素  不会选则更深层次的元素 所以div21.div22,div23都不会被选中
 */
// var query = $('body>div')  //body下的直系div
//+选择器$('#demo +div')选取demo按钮后的div
//~选择器 选所有
// $('#demo +div').css('background','red');
// $('#demo~div').css('background','red');
// $('div:first').css('background','yellow');
// $('div').eq(0).css('background','green');
//不为demo的所有body元素
// $('body:not(#demo)').css('background','blue');
// $('tr:even').css('background','yellow');
//如果标签页被点击 打印被点击的标签页的下标
// $('ul.header li').click(function(tabHeader){
//     var index = $('ul.header li').index($(this));
//     // alert(index);
//     //让选中的标签页下标显示出来
//     $('ul.content li').hide();
//     $(`ul.content li`).eq(index).show();
// })
//bootstrap标签页事件的使用方式
/**
 * show.bs.tab  在标签页切换的时候触发事件
 *
 */
// $(`a[data-toggle='tab']`).on('show.bs.tab',(even)=>{
//     console.log(
//         `激活的新的标签页：${event.target},
//     前一个活跃的标签页：${event.relatedTarget}`）;
// //“显示全部”后面的商品默认隐藏不显示
// $('.show-all ~ *').hide();
// //“显示全部”被点击 显示后面的所有商品
// $('.show-all').click(()=>$('.show-all ~ *').show());
// //“收起” 被点击 隐藏显示后面的所有商品
// $('.shouqi').click(()=>$('.show-all ~ *').hide());
// $('.list-group ~ *').hide().parent('.show-all').click(()=>{
//     $('.show-all ~ *').show();
// })
//jq 链式操作
$('.show-all ~ *').hide()
    .parent().find('.show-all').click(function () { $('.show-all ~*').show(); })
    .parent().find('.shouqi').click(function () { $('.show-all ~*').hide(); });
$('.collapse').on('show.bs.collapse', function () {
    alert('开关之前弹一下');
});
$('.show-all').click(function () {
    $('.collapse').collapse('toggle');
});
$('input.username').blur(function () {
    var phone = $('input.usename').val();
    if (/^1[3-9]\d{9}$/.test(phone)) {
        alert('手机号通过' + phone);
    }
    else {
        alert('错误：' + phone);
    }
});
//# sourceMappingURL=index3.js.map