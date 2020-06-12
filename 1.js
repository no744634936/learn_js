//javascript中不要使用arguments 这个关键字
//使用arguments 这个关键字会将compiler的数度减慢，
//因为 arguments 的结果并不是一个object  是这个样子[Arguments] { '0': 'zhang', '1': 'wnag' }
//arguments 在箭头函数不能使用

function merry1(person1,person2){
    console.log(arguments);
}

merry2=(person1,person2)=>{
    console.log(arguments);
    
}



merry1("zhang","wnag")
merry2("zhang","wnag")