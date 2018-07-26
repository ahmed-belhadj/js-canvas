const canvas = document.querySelector("#drawing");
const context = canvas.getContext("2d");
let isDrawing = false;
let pointX = 0;
let pointY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#bada55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;
context.globalCompositeOperation = "color";

function draw(event) {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(pointX, pointY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  [pointX, pointY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", event => {
  isDrawing = true;
  [pointX, pointY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
