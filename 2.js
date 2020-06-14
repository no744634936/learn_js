//object 深层克隆

let obj = {
    a: 'a',
    b: 'b',
    c: {
      deep: 'try and copy me'
    }
};
  let clone = Object.assign({}, obj);    
  let clone2 = {...obj}
  let superClone = JSON.parse(JSON.stringify(obj))    //先将obj转换成字符串，然后将字符串转换成object，再赋值。
  
  obj.c.deep = 'hahaha';
  console.log(obj)             //{ a: 'a', b: 'b', c: { deep: 'hahaha' } }
  console.log(clone)           //没有克隆成功受到影响        { a: 'a', b: 'b', c: { deep: 'hahaha' } }
  console.log(clone2)          //没有克隆成功受到影响        { a: 'a', b: 'b', c: { deep: 'hahaha' } }
  console.log(superClone)     // 克隆成功 没有收到修改的影响  { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
