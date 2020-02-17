// primitive values
//改变scoreOne 后 scoreTwo不变

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
//改变userOne后，userTwo会变。(array , object)

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);