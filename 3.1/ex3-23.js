//splice 메서드 활용한 배열 프로퍼티 삭제
var arr = ['zero','one','two','three'];

arr.splice(2,1); //splice를 이용하면 요소의 개수도 사라진다.
console.log(arr);
console.log(arr.length);

arr.splice(1,1,'replace'); //삭제되는 요소에 대신할 값도 넣을 수 있다.
console.log(arr);
