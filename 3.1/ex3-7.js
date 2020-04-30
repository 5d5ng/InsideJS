//객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name:'foo',
    major:'computer science'
}

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

//객체 프로퍼티 갱신

foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

foo.age = 30; //객체 프로퍼티 동적 생성
console.log(foo.age);
console.log(foo['age']);

foo['full-name'] = 'foo bar';
console.log(foo['full-name']); 
console.log(foo.full-name); //  -연산자로 계산함 즉 이경우 무조건 ['']표기법을 이용해야함
console.log(foo.full);
console.log(name);
