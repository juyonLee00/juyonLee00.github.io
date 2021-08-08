const images2 = ["0.jpg", "1.jpg","2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg",];

const chosenImage2 = images[Math.floor(Math.random() * images.length)];

const bgImage2 = document.createElement("img");

bgImage2.src = `img/${chosenImage}`;
bgImage2.style.position="absolute";
bgImage2.style.height="20%";
bgImage2.style.width="30%";
bgImage2.style.position="absolute";
bgImage2.style.top="60%";
bgImage2.style.left="70%";

const randomPhoto = document.querySelector("#randomPhoto");

randomPhoto.appendChild(bgImage2);
//자꾸 배경사진과 같은 사진이 나온다..뭐가 문제일까?