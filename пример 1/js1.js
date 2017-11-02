function init() {
  console.info("initialized"); //console.log,info,error,warn,debug
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "red";
  ctx.fillRect(10,10,100,200);  
  ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
  ctx.lineWidth = 11;
  ctx.lineJoin = "round";
  ctx.strokeRect(20 , 40,190,100);
  ctx.beginPath();
  ctx.moveTo(200,300);
  ctx.lineTo(200,200);                                              
  ctx.lineTo(300,200);
  ctx.arc(250,250,20,0,1,true);
  ctx.strokeStyle = "blue";
  ctx.bezierCurveTo(12, 270, 240, 92, 350,220);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  }