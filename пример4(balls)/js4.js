function init() {
    console.info("starting balls");
    var X0=10;
    var Y0=10;
    var WIDTH = 400;
    var HEITH = 280;
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');
    var balls = [{x:50,y:60,vx:5, vy:5, r:10, color:"blue"}, {x:70, y:90, vx: 4, vy: 7, r:20, color:"green"}];
    var image = document.getElementById("image");
    
    requestAnimationFrame(frame/*, 1000 / 60*/); 

    function frame() {
	ctx.save();
	ctx.rotate(3*Math.PI/180);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 255, 220, 0.5)";
        ctx.fillRect(10, 10, 400, 280);
        
        for( var i = 0; i < balls.length; i++) {
            drawFrame(balls[i].x, balls[i].y, balls[i].r, balls[i].color);
            ctx.drawImage(image, balls[i].x - balls[i].r,balls[i].y - balls[i].r,2*balls[i].r,2*balls[i].r);
            if (balls[i].x + balls[i].r >= WIDTH + X0) {
                balls[i].x = balls[i].x - 2 * (balls[i].x + balls[i].r - WIDTH - X0);
                balls[i].vx = -balls[i].vx;
            }
            if (balls[i].y + balls[i].r >= HEITH + Y0) {
                balls[i].y = balls[i].y - 2 * (balls[i].y + balls[i].r - HEITH - Y0);
                balls[i].vy = -balls[i].vy;
            }
            if (balls[i].x - balls[i].r <= X0) {
                balls[i].x = balls[i].x + 2 * (balls[i].x - balls[i].r - X0);
                balls[i].vx = -balls[i].vx;
            }
                
            if (balls[i].y - balls[i].r <= Y0) {
                balls[i].y = balls[i].y - 2 * (balls[i].y - balls[i].r - Y0);
                balls[i].vy = -balls[i].vy;
            }
            
            balls[i].x += balls[i].vx;
            balls[i].y += balls[i].vy;
            //balls[i].vx += 0.01;
            //balls[i].vy += 0.01;
			ctx.restore();
        }
        
        requestAnimationFrame(frame/*, 1000 / 60*/);
    }

    function drawFrame(x,y,r,color) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
	}
}