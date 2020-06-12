//用Array.from()来将arguments 转化成数组
//arguments 在箭头函数不能使用

function merry1(person1,person2){
    console.log(Array.from(arguments));
}



merry2=(person1,person2)=>{
    console.log(Array.from(arguments));  
}


//使用...args 来获取多个参数的数组
merry3=(...args)=>{
    console.log(args);  
}


merry1("zhang","wnag")
merry2("zhang","wnag")
merry3("zhang","wnag")