//Difference of Call by Value and Call by Reference

var a = 100;
var objA = {val: 100};

function changeArg(num,obj) {
    num = 200;
    obj.val = 200;

    console.log(num);
    console.log(obj);
}
changeArg(a,objA);

console.log(a);
console.log(objA);