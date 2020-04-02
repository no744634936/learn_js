
console.log("start");


//promise is an object that give us back either a result of asynchronous operation or  a failure.
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //取出数据成功时的写法。 resolve括号里的参数就是then里面的user。
        resolve({username:"zhang"})
        console.log("got the username");
    },2000);
})

promise.then((user)=>{
    console.log(user);
})

console.log("end");
