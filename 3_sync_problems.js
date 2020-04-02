console.log("start");

//simulate login take sometime to comeback
loginUser=(email,password)=>{
    setTimeout(()=>{
        console.log(email);
        console.log(password);
        console.log("now we have the data");
        
        return "user zhang"
    },2000);
}

const user=loginUser("zhang@gmail.com",1234);

console.log(user);   
//console.log(user);   will show undefined 
//because the return data did not comeback yet when I console.log(user);

console.log("end");


//to solve this problem ,we need to  add a call back function


