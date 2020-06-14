var b = {
    name: 'jay',
    say() {console.log(this)}  //this 指向b
  }
  
  var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}  //this指向window 或则global object
  }
  
  var d = {
    name: 'jay',
    say() {return () => console.log(this)}     //this指向 d
  }



  b.say();
  c.say()();
  d.say()();