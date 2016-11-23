var phone = '15172480645';
//1 3-9的任意一位数字 9个数字   (以^开始 ，$结尾 ，表示完全匹配 )
var result = /^1[3-9]\d{9}$/.test(phone);
console.log(result);
//区分大小写
var hello = "Hello";
var result2 = /hello/.test(hello);
console.log(result2);
//  ^ （非）的使用
console.log(/[^123]/.test('456'));
console.log(/[^2]/.test('23'));
//条件分组   只需满足一个条件就可
console.log(/ab|cd/.test("ab"));
//邮箱验证
var email = '774004514@qq.com';
var result3 = /^\w+@\w+.com$/.test(email);
console.log(result3);
//# sourceMappingURL=index.js.map