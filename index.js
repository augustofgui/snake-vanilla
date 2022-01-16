const canvas = document.querySelector("#canvas");
canvas.width = 500;
canvas.height = 500;

const canvasW = canvas.width;
const canvasH = canvas.height;

const ctx = canvas.getContext("2d");

const gamePad = document.querySelectorAll(".game-pad-button");
gamePad.forEach(element => {
    element.onclick = clicked;
});

var text = 40;
var size = 10;

var IPixelU = new FontFace('I Pixel U', 'url(./resources/I-pixel-u.ttf)');

IPixelU.load().then(function(font) {

  // Ready to use the font in a canvas context
  console.log('font ready');

  // Add font on the html page
  document.fonts.add(font);
});

function clicked() {
    ctx.beginPath();
    ctx.font = '48px I Pixel U';
    ctx.fillStyle = "white";
    ctx.fillText("Clickou!", 20, text);
    text += 40;
    ctx.closePath();
}

function init(){
    drawStartingScreen();
    setInterval(drawStartingScreen, 1000/15);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawStartingScreen() {
    clearCanvas();

    ctx.beginPath();
    ctx.font = size + 'px I Pixel U';
    ctx.fillStyle = "white";
    ctx.textAlign = "center"; 
    ctx.fillText("JSTATION", canvas.width/2, canvas.height/4 + size);
    ctx.closePath();

    size += 15;
}


function draw() {

}

init(); 


