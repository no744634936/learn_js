
//仅作了解，使用class 继承的时候到底是怎么做到继承的


//User 的构造器跟方法
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
  



  // admin
  function Admin(username, email,title){
    //相当于super，呼叫user的构造器并把参数传给user个构造器，记得传this
    User.call(this, username, email);
    this.title=title;
  }
  
  //继承User prototype的方法
  Admin.prototype = Object.create(User.prototype);
  
  //添加属于adim的方法
  Admin.prototype.deleteUser = function(user){
    // delete the user
  };
  
  const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
  const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
  const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk','cto');
  
  console.log(userThree);