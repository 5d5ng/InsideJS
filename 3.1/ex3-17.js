//arr 배열 생성
var arr =['zero','one','two'];

//push() 메서드 호출

arr.push('three');
console.log(arr);

//legth값 변경 후 , push() 메서드 호출

arr.length = 5;
arr.push('four');
console.log(arr);

//push는 무조건 배열사이즈 다음 자리 추가
