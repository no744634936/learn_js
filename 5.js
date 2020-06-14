//bind 绑定的方法不是像 call 和 apply 那样是立马执行的。
//bind 返回一个新的方法。然后可以过一会儿再执行这个方法。


let wizard={
    name:"Merlin",
    health:50,
    heal(num1,num2){
        this.health=100+num1+num2; 
    }
}

let  superman={
    name:"clark",
    health:20,
}

console.log("superman health before healing",superman.health);  //20

let heal_superman=wizard.heal.bind(superman,50,40);    //bind 接收参数的格式跟call一样的

console.log(superman.health); //20


heal_superman();
console.log("superman health after healing",superman.health); //190

