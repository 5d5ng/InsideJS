//apply()를 활용한 배열 메서드 호출
var arr = ['bar'];

var obj = {name: 'foo' , length :1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj,['baz']);
console.log(obj);