let flag = 0;
function arrorClick(num) {
  flag = flag + num;
  slideFun(flag);
}

function slideFun(x) {
  let getImg = document.getElementsByClassName("slide");
  console.log(getImg);

  if (x == getImg.length) {
    x = 0;
    flag = 0;
  } else if (x < 0) {
    x = getImg.length - 1;
    flag = getImg.length - 1;
  }

  for (let a of getImg) {
    a.style.display = "none";
  }
  getImg[x].style.display = "block";
}
