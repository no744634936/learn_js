console.log("start");

loginUser=(email,password,callback)=>{
    setTimeout(()=>{
        console.log(email);
        console.log(password);
        console.log("now we have the data");
        callback("user zhang");// 这个user zhang 字符串就是下面的user.
    },5000);
}

const user=loginUser("zhang@gmail.com",12345,(user)=>{
    console.log(user);
});

console.log("end");

//这样就不会出现有数据是undefined了