//starting something now which can be finished later.

//Async 一般是用来获取数据


console.log(1);
console.log(2);

setTimeout(()=>{
    console.log("callback function fired");
},2000)

console.log(3);
console.log(4);

//打印1，2，3，4然后打印callback function fired