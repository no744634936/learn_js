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

// loginUser("zhang@gmail.com",12345)
// .then(user=>getUserVideos(user.name))
// .then(arr=>console.log(arr[0]));

displayVideo=async()=>{
    //  await 只能用在async方法里面
    //  这是我自己的记忆方法，await就是将resolve方法里的参数返回来。
    try{
        let user= await loginUser("zhang@gmail.com",12345);
        let vidoes_array= await getUserVideos(user.name);
        console.log(vidoes_array[0]);
    }catch(err){
        console.log("we can not get the videos");
    }

}

displayVideo();

console.log("end");


