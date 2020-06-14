
let obj={
    name:"zhanghaifeng",
    sing(){
        console.log("a",this);        //this 指向obj
        let anotherfunc=()=>{  
            console.log("b",this);   
        }
        anotherfunc()
    },
    anotherfunc(){
        console.log("b",this);   
    }
}


obj.sing();