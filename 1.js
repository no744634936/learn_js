if(5>4){
    var secret="1234";
}

console.log(secret);   //可以获取到值， var提供的是function scope





if(5>4){
    let secret2="1234";
}
console.log(secret2);   //获取不到值， let提供的是block scope



loop=()=>{
    for(var i=1;i<5;i++){
        console.log(i);
    }

    console.log("final",i);
}

loop();