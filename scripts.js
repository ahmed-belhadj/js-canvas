const canvas = document.querySelector("#drawing");
const context = canvas.getContext("2d");
let isDrawing = false;
let pointX = 0;
let pointY = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "bada55";
context.lineJoin = "round";
context.lineCap = "round";

function draw(event) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(pointX, pointY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [pointX, pointY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", event => {
  isDrawing = true;
  [pointX, pointY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
