const youtube=new Promise(resolve=>{
    setTimeout(()=>{
        console.log("get data from youtube");
        resolve({videos:[1,2,3,4,5,6]});
    },2000);
});

const facebook=new Promise(resolve=>{
    setTimeout(()=>{
        console.log("get data from facebook");
        resolve({username:"zhang"});
    },50000);
})


// 用promise同时从两个api里面取出数据 
// 就算两个异步方法等待的时间不一样。也会在等待时间完了之后将结果同时返回
Promise.all([youtube,facebook]).then(result=>{console.log(result);})