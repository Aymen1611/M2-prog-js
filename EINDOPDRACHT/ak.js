const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');





ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = "black";
ctx.fillRect(450,300,350,30);
ctx.fillRect(800,300,30,180);
ctx.fillRect(450,450,350,30);

ctx.closePath();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(475,240);
ctx.lineTo(463,260);
ctx.lineTo(487,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(460,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(525,240);
ctx.lineTo(513,260);
ctx.lineTo(537,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(510,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(575,240);
ctx.lineTo(563,260);
ctx.lineTo(587,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(560,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(625,240);
ctx.lineTo(613,260);
ctx.lineTo(637,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(610,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(675,240);
ctx.lineTo(663,260);
ctx.lineTo(687,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(660,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(725,240);
ctx.lineTo(713,260);
ctx.lineTo(737,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(710,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(775,240);
ctx.lineTo(763,260);
ctx.lineTo(787,260);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(760,260,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(475,390);
ctx.lineTo(463,410);
ctx.lineTo(487,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(460,410,30,30);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(525,390);
ctx.lineTo(513,410);
ctx.lineTo(537,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(510,410,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(575,390);
ctx.lineTo(563,410);
ctx.lineTo(587,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(560,410,30,30);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(625,390);
ctx.lineTo(613,410);
ctx.lineTo(637,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(610,410,30,30);


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(675,390);
ctx.lineTo(663,410);
ctx.lineTo(687,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(660,410,30,30);


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(725,390);
ctx.lineTo(713,410);
ctx.lineTo(737,410);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(710,410,30,30);





ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(660,530);
ctx.lineTo(695,530);
ctx.lineTo(677,500);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(670,532,15,20);


ctx.beginPath();
ctx.fillStyle = "green";
ctx.moveTo(730,530);
ctx.lineTo(765,530);
ctx.lineTo(747,500);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(740,532,15,20);


ctx.beginPath();
ctx.fillStyle = "green";
ctx.moveTo(845,348);
ctx.lineTo(880,348);
ctx.lineTo(863,318);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(855,350,15,20);


ctx.beginPath();
ctx.fillStyle = "green";
ctx.moveTo(845,438);
ctx.lineTo(880,438);
ctx.lineTo(863,408);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "brown";
ctx.fillRect(855,440,15,20);


function drawCircle(color, x, y, radius) {
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
  
  function drawTriangle(color, x, y, height) {
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - height, y - height);
    ctx.lineTo(x + height, y - height);
    ctx.fill();
  }
  
  function drawRectangle(color, x, y, width, height) {
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  
  // sneeuwpop bollen
  drawCircle("#B9F3FC", 200, 350, 100);
  drawCircle("#B9F3FC", 200, 200, 75);
  drawCircle("#B9F3FC", 200, 100, 50);
  
  
  // ogen
  drawCircle("#000", 220, 90, 5);
  drawCircle("#000", 180, 90, 5);
  
  // zwarte stippen
  drawCircle("#000", 200, 160, 3);
  drawCircle("#000", 200, 200, 3);
  drawCircle("#000", 200, 240, 3);
  
  // neus
  drawTriangle("#000", 200, 110, 7);
  
  // hoed
  drawRectangle("#555454", 160, 45, 80, 10);
  drawRectangle("#555454", 170, 5, 60, 40);
  
  // armen
  drawRectangle("#44261c", 270, 200, 80, 5);
  drawRectangle("#44261c", 50, 200, 80, 5);
  


