
//数组也是object ，数组参照类型。所以改动一个另一个也会受影响
var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]



//那么要如何复制一个数组呢？要这样写
let a=[1,2,3];
let b=[].concat(a);
b.push(4);

console.log(a);    //[ 1, 2, 3 ]
console.log(b);   //[ 1, 2, 3, 4 ]



//object 的时候。要如何复制object呢
let obj = {
    a: 'a',
    b: 'b',
    c: "c"
};


let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c=5;

console.log(obj);    //{ a: 'a', b: 'b', c: 5 }    改变了
console.log(clone);  //{ a: 'a', b: 'b', c: 'c' }  没改变
console.log(clone2); //{ a: 'a', b: 'b', c: 'c' }  没改变




