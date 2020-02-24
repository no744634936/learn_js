const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();
  
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

  clock.innerHTML = html;

};

//一秒钟执行一次
setInterval(tick, 1000);


// setInterval…一定時間ごとに特定の処理を繰り返す
// setTimeout…一定時間後に特定の処理をおこなう（繰り返さずに一度だけ