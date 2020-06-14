const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
};

  //bind还可以这样用？为什么可以这样用呢？
  //这种写法好恶心
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
  console.log('?', giveMeTheCharacterNOW());
  
