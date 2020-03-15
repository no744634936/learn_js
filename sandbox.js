// set 跟数组差不多。但是它不允许有重复元素。如果有会删除重复项，只留一个。
// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const namesSet = new Set(namesArray);
console.log(namesSet);

// const uniqueNames = [...namesSet];qucong
//数组去掉重复的方法。
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(30)

console.log(ages, ages.size);  //set 没有 length方法但是有size方法
console.log(ages.has(30), ages.has(20));

ages.clear();
console.log(ages);

const ninjas = new Set([
  {name: 'shaun', age: 30},
  {name: 'crystal', age: 29},
  {name: 'chun-li', age: 32}
]);

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});


//---------------------------------------------symbol-----------------------

// no symbol is the same

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};

//belt 会被覆盖。
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

//虽然symbol都叫 a generic name，但是不会被覆盖。
//so use the symbol as object keys means that all keys are different.
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);