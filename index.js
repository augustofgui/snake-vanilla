const canvas = document.querySelector("#canvas");
canvas.width = 500;
canvas.height = 500;

const canvasW = canvas.width;
const canvasH = canvas.height;

console.log(canvasW);
console.log(canvasH);
console.log(document.body.clientWidth);
console.log(document.body.clientHeight);

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = 'rgb(66, 75, 84)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.font = '50px serif'
// use these alignment properties for "better" positioning
ctx.textAlign = "center"; 
ctx.textBaseline = "middle"; 
// draw the emoji
ctx.fillText('🍎', canvas.width / 2, canvas.height / 2)

