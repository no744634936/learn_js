
console.log("start");


const promise=new Promise((resolve,reject)=>{
    //如果出现错误时的写法。
    setTimeout(()=>{
        reject(new Error("user not logged in"));
    },2000);
})

promise.then((user)=>{
    console.log(user);
}).catch(err=>{
    console.log(err.message);
});

console.log("end");
