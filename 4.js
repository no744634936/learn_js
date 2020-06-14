
//apply 与call的不同就是 call接收的是分散的参数，
//而apply接收的参数可以是数组
//用apply会好一点感觉


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

wizard.heal.apply(superman,[50,40]);    //apply 接收数组.

console.log("superman health after healing",superman.health); //190

