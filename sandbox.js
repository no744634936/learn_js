// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();      
names.reverse();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();  //[10, 20, 35, 45, 5, 50, 70] 破坏性方法
scores.reverse();
console.log(scores);

// example 3 - sorting objects
const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

// players.sort((a,b) => {
    //如果a大于b 不变
//   if(a.score > b.score){
//     return -1;
    //如果b大于a,b提前
//   } else if (b.score > a.score){
//     return 1;
    //当a等于b，不变
//   } else {
//     return 0;
//   }
// });


//这个是简写版，非常精妙
players.sort((a,b) => b.score - a.score);

console.log(players);