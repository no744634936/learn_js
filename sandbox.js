const foo={name:"zhang",age:20};
const bar={name:"wang",age:30};
const baz={name:"liu",age:40};

//bad 
console.log(foo);
console.log(bar);
console.log(baz);

//good
//可以加css style
console.log("%c my friends","color:orange;font-weight:bold");
console.log({foo,bar,baz});

//good
console.table([foo,bar,baz]);


//------------------------------log time
//控制器会打印looper的时间
console.time("looper");
let i=0;
while(i<100000){
    i++
}
console.timeEnd("looper");


// stack trace log
// if you need to know where a console.log originated from
// let's imagine we have a really important function that deleted items from our database and 
// we want to make sure that we don't accidentally call this method twice.
// console.trace("bye bye database"); 会告诉你，deletedData方法定义在36行.在39 和40行被呼叫
const deletedData=()=>{
    // some code
    console.trace("bye bye database");
}

deletedData();
deletedData();


//destructuring
const cat={
    name:"bob",
    age:2,
    legs:4,
    food:"meat"
}

//bad
// function feed(animal){
//      return `feed ${animal.name} ${animal.food}`;
// }

//good
// function feed({name,food}){
//      return `feed ${name} ${food}`;
// }

//or this way 
function feed(animal){
    const {name,food}=animal;
    return `feed ${name} ${food}`;
}

console.log(feed(cat));



//template-literals
const dog={
    name:"tom",
    age:7,
    legs:4,
    food:"meat"
}


//good
const {name,legs,food}=dog;
const biz=`${name} have ${legs} legs like eat ${food}`;
console.log(biz);



// advanced template-literals 
//This dog is 就是 str[0]
function dogAge(str,age){
    const ageStr=age>5 ? "old" : "young";
    return `${str[0]} ${ageStr} at ${age} years`;
}


//dogAge 后面没有括号。
const bio2= dogAge`This dog is ${dog.age}`;
console.log(bio2);




//good loop
//使用 reduce map filter 等方法