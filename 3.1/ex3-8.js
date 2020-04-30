var foo = {
    name:'foo',
    age:30,
    major:'Computer Science'
};

// for in 루프 사용
var prop;
for (prop in foo){
    console.log(prop,foo[prop]);
}
