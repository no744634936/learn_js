//如何避免这个坑？

// 2,使用bind来绑定this
//这个方法不太直观，不好用。
//

let obj={
    name:"zhanghaifeng",
    sing(){
        console.log("a",this);        //this 指向obj
        let anotherfunc=()=>{  
            console.log("b",this);   
        }
        return anotherfunc.bind(this);   //bind 之后返回的是一个绑定了this的方法，
    }
}

//anotherfunc.bind(this) 的意思就是将anotherfunc 变成obj的一个方法。
//而不是嵌套在sing方法里面的，可以看4.1.js文件，就是bind执行之后样子。

//第二个括号是用来调用bind返回的方法。
obj.sing()()