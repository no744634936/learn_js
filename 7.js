//function currying
//感觉好麻烦。不直观。

function multply(a,b){
    return a*b;
}


//利用 multply方法里的代码。然后将参数a 的值设为2，
//调用方法时传入参数b，这里的参数b为10 
let multplyByTwo=multply.bind(this,2);
console.log(multplyByTwo(10));          //20

//
let multplyByTen=multply.bind(this,10);
console.log(multplyByTen(5));           //50

