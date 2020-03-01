  
// constructor functions
// class User {
//   constructor(username){
//     this.username = username;
//   }
// }

//javascript 特有的，比较老的写法。直接建立一个User constructor方法。注意User要大写。
//然后还可以把login方法也放进去。
//即用constructor 替代了class
//这是比较老的写法，这里提到是为了引出 prototype。
function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
      console.log(`${this.username} has logged in`);
    };
  }
  
  const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
  const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
  
  console.log(userOne, userTwo);
  userOne.login();