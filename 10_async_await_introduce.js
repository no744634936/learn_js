console.log("start");

loginUser=(email,password)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({username:"zhang"});
        },5000);
    });

}

getUserVideos=(username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["video1","video2","video3"])
        });
    })
}


loginUser("zhang@gmail.com",12345)
.then(user=>getUserVideos(user.name))
.then(arr=>console.log(arr[0]));

console.log("end");


//这样写也很麻烦，如果能像下面那样写就好了
loginUser("zhang@gmail.com",12345)
.then(user=>getUserVideos(user.name))
.then(arr=>console.log(arr[0]));


//如果我能这样写就好了
// const user=loginUser("zhang@gmail.com",12345);
// const videos_array=getUserVideos(user.name);
// console.log(videos_array[0])

