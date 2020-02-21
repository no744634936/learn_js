//call back function 后面的参数0，是accumulator的初始值。




// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((accumulator, current) => {
//   if(current > 50){
//     accumulator++;
//   }
//   return accumulator;
// }, 0);

// console.log(result);

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];
  
  const marioTotal = scores.reduce((accumulator, current) => {
    if(current.player === 'mario'){
      accumulator += current.score;
    }
    return accumulator;
  }, 0);
  
  console.log(marioTotal);