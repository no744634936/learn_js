//this 有最基本的两种用法

//give methods access to their object

const obj = {
    name: 'Billy',
    sing: function() {
      return 'llala ' + this.name + '!'
    },
    singAgain: function() {
      return this.sing()
    }
  }


//excute same code for mutiple objects
  function importantPerson() {
    console.log(this.name)
  }
  
  const name = 'Sunny';
  const obj1 = { name: 'Cassy', importantPerson: importantPerson}
  const obj2 = { name: 'Jacob', importantPerson: importantPerson}
  
  obj2.importantPerson()