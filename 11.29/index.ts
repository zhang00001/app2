

/** 操作DOM元素
 * .htnl())作html  .text() 操作text .val()操作值
 * 不传参获取值
 * 传来参数设置值
 * */
$('body').html()
$('body').text()
$('body').val()

/** attr()操作属性
 *  attr(str:string) 获取制定的属性的值 例如id,calss,style
*/
$('body').attr({id:'idBody',class:'body'});

/**
 * 操作样式
 *  * attr('style','xxxx');  设置样式
 *  * addClass  设置class
 */
$('body').attr("style",'');
$('body').addClass('maClass');
$('body').removeClass();  //移除class
$('body').toggleClass()   //开关class  当class存在就移除  不存在就增加class
$('body').css('position'); 
                    //css的三种用法
                     //css('position','fixed')   css('color',()=>{return ...})   css({color:'blue'});

//appdend  在元素的内部后面添加
$(document.body).append($(`<h1>Hello word</h1>`));
$('body').prepend($(`<h1>hello word</h1>`));
$('body').remove(); //什么都不传，将元素移除  传入selector,将选中的元素移除
$('body').empty() //清空节点 不清除外部的元素







$('p').replaceWith('<h1>你最喜欢的水果是</h1>');

/** clone()  默认不会复制元素的点击事件 true 则连事件一起复制
 * $('body').append('ul.menu');
 *  
 * 
 *  

 * */
$('ul.menu').clone(true).appendTo('body');