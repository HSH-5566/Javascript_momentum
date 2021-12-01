const img = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const randomImg = img[Math.floor(Math.random()*img.length)];
// const selectImg = document.createElement("img");
// selectImg.src = `img/${randomImg}`;
// document.body.appendChild(selectImg); 
const selectImg = document.querySelector("body");
selectImg.style.backgroundImage = `url(img/${randomImg})`;