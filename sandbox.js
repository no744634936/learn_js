const prices = [20, 10, 30, 25, 15, 40, 80, 5];

//create a new array base on old one
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];


//create a new object base on old one
const saleProducts = products.map(product => {
  if(product.price > 30){
    //注意这里return的是一个新的object 元素
    return {name: product.name, price: product.price / 2}
  } else {
    return product;
  }
});

console.log(products, saleProducts);