var img;
var imgMask;

function preload() {
img = loadImage("IMG_4748.jpg");
imgMask = loadImage("AC191-L732F_O.jpg");
loadingImage = loadImage()
}

function setup() {
createCanvas(720, 400);
img.mask(imgMask);
imageMode(CENTER);
}

function draw() {
background(0, 102, 153);
image(img, width/2, height/2);
image(img, mouseX, mouseY);
}
