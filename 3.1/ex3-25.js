var arr = ['bar'];
var obj = {
    name :'foo',
    length :1
};
arr.push('bax');
console.log(arr);

obj.push('baz');//오류발생 실제로 배열이 아니라 유사-배열 객체이기 때문