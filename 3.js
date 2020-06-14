let wizard={
    name:"Merlin",
    health:50,
    heal(num1,num2){
        this.health=100+num1+num2; 
    }
}

//超人需要治疗，但是我又不想重写一遍治疗方法,就可以向wizard借方法
let superman={
    name:"clark",
    health:20,
}

console.log("superman health before healing",superman.health);  //20

wizard.heal.call(superman,50,40);    //call方法也可以接收其他参数

console.log("superman health after healing",superman.health); //190

