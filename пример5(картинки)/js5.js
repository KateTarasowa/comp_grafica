function init() {
  console.info("initialized"); 
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d'); 
  var yandex =
  document.getElementById("yandex-logo");
    var google =
  document.getElementById("google-logo");
  
    var wp= new Image();
    wp.src = "wp.jpeg";
    ctx.drawImage(google, 100, 100);
    ctx.drawImage(google, 120, 120);
     ctx.drawImage(google, 200, 200,100,100);
     console.log(google.width, google.height);
     ctx.drawImage(yandex, 0, 0);
     setTimeout(function(){
     	  ctx.drawImage(wp, 200, 0, 200, 200);
  }, 1000);
     //ctx.drawImage(wp, 200,200,200,0,1000);
}