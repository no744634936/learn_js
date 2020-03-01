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
      //this.score 是constructor里面的this.score 
      this.score += 1;
      console.log(`${this.username} has a score of ${this.score}`);
      return this;
    }
  }
  
  const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
  const userTwo = new User('mario', 'mario@thenetninja.co.uk');
  
  //要想使用methods chaining 就得return this。
  userTwo.login()
    .incScore()
    .incScore()
    .logout();