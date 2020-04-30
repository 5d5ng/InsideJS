var arr = [0,1,2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);

//length를 이용하여 배열의 크기를 할당할 수 있다 즉 삭제도 가능하다