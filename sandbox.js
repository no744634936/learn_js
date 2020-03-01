// 例如当我新建一个数组的时候，_proto_里面就有所有数组共同的方法。例如forEach，filter，sort。
//array 里的_proto_ 指向 array prototype。获得了那些方法。
//在class 里面定义的方法会自动出现在_proto_属性里面
//用class 把下面这些步骤简化了。


//这是一个constructor
function User(username, email){
    this.username = username;
    this.email = email;
  }
  

  User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
  };
  
  User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
  };
  
  //userOne 跟 userTwo 里的_proto_属性里面会出现login logout 两个功能。
  const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
  const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
  
  console.log(userOne);
  
  userOne.login().logout();