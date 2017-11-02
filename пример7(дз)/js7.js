function init() {
    console.info("starting balls");
    var X0 = 10;
    var Y0 = 10;
    var WIDTH = 400;
    var HEITH = 280;
	var FRAMES_PER_SECONS /*FPS*/ = 10;
    var canvas = document.getElementById("game");
	//vx, vy количество пикселей в секунду
    var balls = [{x:50,y:60,vx:15, vy:15, r:10, color:"blue", explodedFrame:0}, {x:70, y:90, vx: 18, vy: -20, r:20, color:"green", explodedFrame:0}];
	var xn = -1;
	var yn = -1;
    var ctx = canvas.getContext('2d');
	
	canvas.addEventListener(
		'mousedown',
		function(e) {
			function sq(x) {
				return x * x;
			}
		
            console.log(balls);
            var ballIndex = -1; //никакой шарик
			
            for (var i = 0; i < balls.length; i++) {
				var b = balls[i];
				if (b.explodedFrame == 0 && sq(e.offsetX - b.x) + sq(e.offsetY - b.y) <= sq(b.r)) {
                    ballIndex = i;
                    break;
                }
            }
			
			console.log(ballIndex);
			
            if (ballIndex == -1)
                balls.push({x:e.offsetX, y:e.offsetY, vx:15, vy:20, r:30, color:"green", explodedFrame:0});
            else{
				var current_time = new Date().getTime();
				var time_from_start = current_time - program_start_time;
				balls[ballIndex].explodedFrame = Math.round(time_from_start / 1000 * FRAMES_PER_SECONS);
				console.log(balls[ballIndex].explodedFrame);
                //balls.splice(ballIndex, 1);
			}
        }
	);
	
    var image = document.getElementById("image");
    balls_image = document.getElementById("balls");
    bum_image = document.getElementById("bum");
 
    requestAnimationFrame(nextFrame/*, 1000 / 60*/); 
	var BUM_SPRITE = {
		x0: 0, y0: 0,
		w: 100, h: 100,
		num: 34
	};
	var BALL_SPRITE = {
		x0: 15, y0: 0,
		w: 57, h: 57,
		num: 19
	};
	
	var frameNumber = 0;
	var program_start_time = new Date().getTime();
	
	var time_from_last_frame = 0; //сколько времени прошло с предыдущего кадра
	var last_frame_time = program_start_time; //момент времени, когда рисовался предыдущий кадр

    function nextFrame() {
		var current_time = new Date().getTime();
		var time_from_start = current_time - program_start_time;
		frameNumber = Math.round(time_from_start / 1000 * FRAMES_PER_SECONS);
		time_from_last_frame = current_time - last_frame_time;
		last_frame_time = current_time;
	
        drawFrame();
        
        requestAnimationFrame(nextFrame/*, 1000 / 60*/);
    }
	
	function drawFrame() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 255, 220, 0.5)";
        ctx.fillRect(10, 10, 400, 280);
        
        for (var i = 0; i < balls.length; i++) {
            drawBall(i);
			if (balls[i].explodedFrame != 0 && frameNumber - balls[i].explodedFrame >= 34) {
			console.log(balls[i].explodedFrame);
				balls.splice(i, 1);
				
			} else if (balls[i].explodedFrame == 0){
				
				if (balls[i].x + balls[i].r >= WIDTH + X0) {
					balls[i].x = balls[i].x - 2 * (balls[i].x + balls[i].r - WIDTH - X0);
					balls[i].vx = -balls[i].vx;
				}
				if (balls[i].y + balls[i].r >= HEITH + Y0) {
					balls[i].y = balls[i].y - 2 * (balls[i].y + balls[i].r - HEITH - Y0);
					balls[i].vy = -balls[i].vy;
				}
				if (balls[i].x - balls[i].r <= X0) {
					balls[i].x = balls[i].x + 2 * (X0 - balls[i].x + balls[i].r);
					balls[i].vx = -balls[i].vx;
				}
					
				if (balls[i].y - balls[i].r <= Y0) {
					balls[i].y = balls[i].y - 2 * (balls[i].y - balls[i].r - Y0);
					balls[i].vy = -balls[i].vy;
				}
				
				balls[i].x += balls[i].vx * time_from_last_frame / 1000;
				balls[i].y += balls[i].vy * time_from_last_frame / 1000;
				//balls[i].vx += 0.01;
				//balls[i].vy += 0.01;
			}
        }
	}

    function drawBall(i) {	
		if (balls[i].explodedFrame == 0) {
			var sprite_x = BALL_SPRITE.x0 + (BALL_SPRITE.w + BALL_SPRITE.x0) * (frameNumber % BALL_SPRITE.num);
			
			ctx.drawImage(
				balls_image,
				sprite_x, BALL_SPRITE.y0,// координаты
				BALL_SPRITE.w, BALL_SPRITE.h,//размер
				balls[i].x - balls[i].r, balls[i].y - balls[i].r,//где рисовать
				2 * balls[i].r, 2 * balls[i].r
			);//размер рисования    
		} else {
			ctx.drawImage(
				bum_image,
				BUM_SPRITE.w * (frameNumber - balls[i].explodedFrame), BUM_SPRITE.y0,// координаты
				BUM_SPRITE.w , BUM_SPRITE.h, //размер
				balls[i].x - balls[i].r, balls[i].y - balls[i].r, //где рисовать
				2 * balls[i].r, 2 * balls[i].r
			);
		}
	}
}