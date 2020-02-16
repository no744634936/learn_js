console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();  //0–1（0以上、1未満）の範囲で浮動小数点の擬似乱数を返します。

console.log(random);
console.log(Math.round(random * 100));



// 最大値を指定
// 0〜10の間で得たい場合は11、0〜100で得たい場合は101を指定します。

var a = Math.floor( Math.random() * 11 ) ;


// 最小値と最大値を指定
// 「最小値と最大値を指定したい」という場合です。最小値をmin、最大値をmaxとして、左側にはmax + 1 - minを、右側にはminを指定して下さい。

var min = 5 ;
var max = 10 ;

var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;



// 配列からランダムで選ぶ
// 応用です。配列からランダムで要素を選ぶのは、「最大値だけ指定する方法」の最大値の部分に配列の要素数をあてはめれば実現できます。

// 配列
var arr = [ "こんにちは", "おはよう", "こんばんは", "さようなら" ] ;

// 配列からランダムで値を選択
var a = arr[ Math.floor( Math.random() * arr.length ) ] ;