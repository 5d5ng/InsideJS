//make str String

var str = 'test';
console.log(str[0],str[1],str[2],str[3]);

str[0] = 'T';
//문자열은 수정이 불가능하다 따라서 test가 출력된다
console.log(str);