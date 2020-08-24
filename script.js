const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// //create rectangle with fillreact
// //fillReact()
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "green";
// ctx.fillRect(200, 20, 150, 100);

// //create reactangle(outine) with strokereact
// //strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// ctx.strokeRect(100, 200, 150, 100);

// //erasing the rectangle
// //clearRect()
// ctx.clearRect(25, 25, 140, 90);

// //create text with filltext
// //fillText()
// ctx.font = "30px Arial";
// ctx.fillStyle = "black";
// ctx.fillText("Hi there", 400, 50);

// //create text(outline) with stroketext
// //strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = "orange";
// ctx.strokeText("Hello", 400, 100);

// //Path
// //Create Inverted Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 150);
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.fillStyle = "red";
// ctx.fill();

// //Create Triangle
// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(250, 150);
// ctx.lineTo(200, 50);
// ctx.closePath();
// ctx.stroke();

// //Create Rectangle
// ctx.beginPath();
// ctx.moveTo(300, 50);
// ctx.lineTo(500, 50);
// ctx.lineTo(500, 150);
// ctx.lineTo(300, 150);
// ctx.lineTo(300, 50);
// ctx.fillStyle = "red";
// ctx.closePath();
// ctx.fill();

// //Create Circle
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.beginPath();
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
// ctx.moveTo(centerX + 100, centerY);
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
// ctx.moveTo(centerX - 60, centerY - 80);
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
// ctx.stroke();

//Animation 1
const circle = {
  x: 200,
  y: 200,
  size: 50,
  dx: 5,
  dy: 3,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();
