//在javascrpt中，function 可以

//1，被赋值给一个变量

let stuff=()=>{}

//2，可以被当作参数传递
let a=(fn)=>{
    fn();
}

a(()=>{console.log("haha")})


//可以被return

b=()=>{
    return c=()=>{console.log("bbbb");
    }
}

// b()();

let d=b();
d();
