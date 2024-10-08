const box = document.querySelector(".drag-box");
//   鼠标离box的偏移量
let offsetX = 0;
let offsetY = 0;
let flag = false;
box.addEventListener("mousedown", function (event) {
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  flag = true;
});

box.addEventListener("mouseup", function (event) {
  flag = false;
});

document.addEventListener("mousemove", (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  //计算box右下角的位置
  let _w = window.innerWidth - box.offsetHeight;
  let _h = window.innerHeight - box.offsetWidth;

  if (flag) {
    let div_x = mouseX - offsetX;
    let div_y = mouseY - offsetY;

    let x = Math.min(_w, Math.max(0, div_x));
    let y = Math.min(_h, Math.max(0, div_y));
    box.style.left = x + "px";
    box.style.top = y + "px";
  }
});
