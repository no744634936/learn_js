

const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }
  };
  
  console.log(userOne.email, userOne.username);
  userOne.login();
  
  const userTwo = {
    username: 'chun-li',
    email: 'chun.li@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }
  };
  

  //像上面那样重复复制代码是不行的，要做的是建立一个user object 来生产很多user
  // const userThree = new User('shaun', 'shaun@thenetninja.co.uk');