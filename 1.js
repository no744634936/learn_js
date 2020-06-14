//call()

test=()=>{
    console.log("hi");
}

//在这种情况下test.call() 等于 test.apply(); 等于test();
test();
test.call();
test.apply();




//-------------------------------------------

let wizard={
    name:"Merlin",
    health:50,
    // heal:()=>{
    //     console.log(this.health);  //undefined
    //     this.health=100;           //object里不能使用箭头函数，因为箭头函数里的this没用
    // },

    // heal=()=>{                    //这种写法也不对
    //     this.health=100; 
    // },

    heal(){
        this.health=100; 
    }
}



wizard.heal();
console.log(wizard.health);






