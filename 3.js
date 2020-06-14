//如何避免这个坑？

// 1，使用箭头函数,在obj的一个函数里可以套一个箭头函数。
//但是sing不能是箭头函数，shit

let obj={
    name:"zhanghaifeng",
    sing(){
        console.log("a",this);        //this 指向obj
        let anotherfunc=()=>{  
            console.log("b",this);   //this 指向obj
        }
        anotherfunc();
    }
}

obj.sing()