
//使用self 来转义，多见于一些比较老的library


let obj={
    name:"zhanghaifeng",
    sing(){

        console.log("a",this);        //this 指向obj

        let self=this;
        let anotherfunc=()=>{  
            console.log("b",self);   //self 指向obj
        }
        anotherfunc();
    }
}

obj.sing()