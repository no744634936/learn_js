const scores=[10,20,30,40,50,5];

//所有元素都在数组中
// const filteredScores=scores.filter(()=>{
//     return true;
// });

//所有元素都不在数组中
// const filteredScores=scores.filter(()=>{
//     return false;
// });

//大于二十的在留下来
const filteredScores=scores.filter((score)=>{
    return score>20;
});

console.log(filteredScores);

//例２
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];
  
  const premiumUsers = users.filter(user => user.premium);
  console.log(premiumUsers);
