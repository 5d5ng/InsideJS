//배열과 객체의 유사점과 차이점

//colorsArray 배열
var colorsArray = ['red','blue','green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

//colorObj 객체
var colorsObj ={
    '0':'red',
    '1':'blue',
    '2':'green'
};

console.log(colorsObj[0]); //어차피 toString()하니까 일반 정수넣어도 문제안됨
console.log(colorsObj[1]);
console.log(colorsObj[2]);


//typeof 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorsObj);

//length
console.log(colorsArray.length);
console.log(colorsObj.length);

//베열 표준 메서드
colorsArray.push('orange');
colorsObj.push('red');
