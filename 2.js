loop=()=>{
    for(var i=1;i<5;i++){
        console.log(i);
    }

    console.log("final",i);  //可以获取到i
}

loop();      

loop2=()=>{
    for(let i=1;i<5;i++){
        console.log(i);
    }

    console.log("final",i);  //获取不到i
}

loop2();      
