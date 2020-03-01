class User {
    constructor(username, email){
      this.username = username;
      this.email = email;
      this.score = 0;
    }
    login(){
      console.log(`${this.username} just logged in`);
      return this;
    }
    logout(){
      console.log(`${this.username} just logged out`);
      return this;
    }
    incScore(){
      this.score += 1;
      console.log(`${this.username} has a score of ${this.score}`);
      return this;
    }
  }
  
  class Admin extends User {
    
    //管理员继承了user 而且有权限删除user。普通user 没有权限
    deleteUser(user){
      users = users.filter(u => u.username !== user.username);
      return this; // allow method chaining
    }
  }
  
  const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
  const userTwo = new User('mario', 'mario@thenetninja.co.uk');
  const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');
  
  



  let users = [userOne, userTwo, userThree];
  console.log(users);
  
  userThree.deleteUser(userTwo);
  console.log(users);