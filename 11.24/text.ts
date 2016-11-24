//大于3则进4
console.log(Math.ceil(3.1));

//小于四则是3
console.log(Math.floor(5.3));
//四舍五入
console.log(Math.round(3.4));
console.log(Math.round(3.5));



//i ignoreCase  忽略大小写 ，g global 全局匹配  m multiline 多行
//    /^1[3-9]\d{9}$/;
var str = "Hello";
console.log(/hello/i.test(str));
var str = 'hellow word';
console.log(str.replace(/o/g, ' '));


var str = `hellow word
today is sunny
so happy
SO HAPPY;
`;
//匹配大小写o 所有的o 所有行的o
console.log(str.replace(/o/igm, ' '));


console.log(str.search(/o/));
console.log(new Date(2008, 8, 8));


//错误处理
// try {
//     var person;
//     console.log(person.name)

// } catch (e) {
//     console.log('错误');
//     person = { name: '默认姓名' };
//     console.log(person.name);
//     // console.log({ name: 'undefind错误', err: e });
// } finally {
//     console.log(person.name);
// }


try {
    // var person1={name:"有姓名"};
    var person1;


}catch(e){
    console.log('错误，该人不存在');
    person1 ={name:"默认姓名"} ;
}finally{
    console.log(person1.name);
}