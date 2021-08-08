const images = ["3.jpg", "8.jpg","11.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.zIndex="-20";
bgImage.style.position="absolute";
bgImage.style.height="100%";
bgImage.style.width="100%";
bgImage.style.backgroundRepeat="no-repeat";
bgImage.style.backgroundSize="cover";


document.body.prepend(bgImage);