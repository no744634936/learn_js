const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't


//解决方法请看8.js