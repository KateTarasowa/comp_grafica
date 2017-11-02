function init() {
  console.info("initialized"); 
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  circleX= 100;
  circleY = 100;
  circleVX = 20;
  circleVY = 10;
  //setInterval(frame, 1000 / 60);  
  requestAnimationFrame(frame);
  function currentTime() {
	return new Date().getTime();
  }
  var whenLastFrame = currentTime();
  function frame() {
  requestAnimationFrame(frame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame();
  var now = currentTime();
  var passed = now-whenLastFrame;
  whenLastFrame = now;
  if (circleX> 500) circleX=-circleVY;
  if(circleY>400) circleY=-circleVX;
  circleX = circleX +passed * circleVX/ 1000;
  circleY = circleY +passed * circleVY/ 1000;
  ctx.fillRect(10,10,400,500);
  //circleX += 1;
  }
  function drawFrame() {
	  ctx.beginPath();
	  ctx.arc(circleX, circleY, 10, 0, 2 * Math.PI);
	  ctx.fillStyle = "rgba(0, 255, 120, 0.5)";
	  ctx.fill();
	  ctx.strokeStyle = "green";
	  ctx.stroke();
	}
  //function where() {
	//if (circleX)  
 
}