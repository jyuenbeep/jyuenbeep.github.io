var color = document.getElementById("colorChoice").value;
var colorPicker = document.getElementById("colorChoice");
colorPicker.addEventListener("input", changeColors);

function changeColors() {
  color = document.getElementById("colorChoice").value;
}

var eraser = document.getElementById("eraser");
eraser.addEventListener("click", erase);
function erase() {
  color = "#FFFFFF";
}

window.addEventListener("load", () => {
  const drawingCanvas = document.querySelector("#can");
  const canvas = drawingCanvas.getContext("2d");

  drawingCanvas.height = window.innerHeight*0.8;
  drawingCanvas.width = window.innerWidth;

  canvas.fillStyle="#FFFFFF";
  canvas.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);

  var painting = false;

  drawingCanvas.addEventListener("mousedown", start);
  drawingCanvas.addEventListener("mouseup", end);
  drawingCanvas.addEventListener("mousemove", draw);

  function start() {
    canvas.beginPath();
    painting = true;
  }
  function end() {
    painting = false;
  }
  function draw(e) {
    if (!painting) return;
    canvas.lineCap="round";
    canvas.strokeStyle=color;

    canvas.lineTo(e.clientX, e.clientY-80);
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(e.clientX, e.clientY-80);
  }

  // for styling
  var increase = document.getElementById("increaseSize");
  increase.addEventListener("click", increaseWidth);

  var decrease = document.getElementById("decreaseSize");
  decrease.addEventListener("click", decreaseWidth);
  function increaseWidth() {
    canvas.lineWidth++;
  }
  function decreaseWidth() {
    canvas.lineWidth--;
  }

  var clear = document.getElementById("clearScreen");
  clear.addEventListener("click", clearS);

  function clearS() {
    canvas.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  }
  
});