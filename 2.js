
//这里有一个巨大大坑，以后写代码一定要注意。

let obj={
    name:"zhanghaifeng",
    sing(){
        console.log("a",this);        //this 指向obj
        let anotherfunc=function(){  
            console.log("b",this);   //this 在浏览器运行的话指向window，在node.js里运行的指向global object
        }
        anotherfunc();
    }
}

obj.sing()