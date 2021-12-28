const images = ["01.jpg" , "02.jpg", "03.jpg"];

const randomImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");

bgImages.src = `IMG/${randomImages}`;

document.body.appendChild(bgImages);
