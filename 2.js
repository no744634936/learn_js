let wizard={
    name:"Merlin",
    health:50,
    heal(){
        this.health=100; 
    }
}

console.log("wizard health before healing",wizard.health);  //50
wizard.heal();
console.log("wizard health after healing",wizard.health);  //100


//超人需要治疗，但是我又不想重写一遍治疗方法,就可以向wizard借方法
let superman={
    name:"clark",
    health:20,
}

console.log("superman health before healing",superman.health);  //20

wizard.heal.call(superman);    //注意heal后面没有括号

console.log("superman health after healing",superman.health); //100

