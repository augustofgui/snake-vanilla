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

var isIntro = true;

var IPixelU = new FontFace('I Pixel U', 'url(./resources/I-pixel-u.ttf)');

IPixelU.load().then(function(font) {

  // Ready to use the font in a canvas context
  console.log('font ready');

  // Add font on the html page
  document.fonts.add(font);
});

function clicked() {
    ctx.font = '48px I Pixel U';
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText("Clickou!", 10, text);
    text += 40;
    if(text>canvas.height)
        text = 40;
}

const FRAMES_PER_SECOND = 15;  // Valid values are 60,30,20,15,10...
// set the mim time to render the next frame
const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
var lastFrameTime = 0;  // the last frame time

function update(time){
    if(time-lastFrameTime < FRAME_MIN_TIME){ //skip the frame if the call is too early
        requestAnimationFrame(update);
        return; // return as there is nothing to do
    }
    lastFrameTime = time; // remember the time of the rendered frame
    // render the frame
    clearCanvas();
    frame = decideFrame();
    frame();

    requestAnimationFrame(update); // get next farme
}
requestAnimationFrame(update); // start animation

function decideFrame() {
    if(isIntro)
        return drawStartingScreen;
    
    return clearCanvas;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawStartingScreen() {
    ctx.font = size + 'px I Pixel U';
    ctx.fillStyle = "white";
    ctx.textAlign = "center"; 
    ctx.fillText("JSTATION", canvas.width/2, canvas.height/4 + size);

    if(size < 50)
        size += 1;

    
}
s


