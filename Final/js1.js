function init() {
    console.info("initialized"); //console.log,info,error,warn,debug
	var stage = new createjs.Stage("game");
	var canvas = document.getElementById("game");
	createjs.Ticker.addEventListener('tick', stage);
	createjs.Ticker.framerate = 30;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	
	var state = 0;
	var koeff = 40; //коэффициент для получения координаты от 0,0 по Х
	var koeff = 40; //коэффициент для получения координаты от 0,0 по Х
	var BG = new createjs.Shape();
	var max = 6; //столбцы
	var min = 0; //столбцы
	var h = 30;
	var w = 30;
	var X0 = 0;
    var Y0 = 0;
	var min_n = 1;
	var max_n = 2;
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
	var blocks = [ {x: Random(min,max), y: 0, num: Random(min_n,max_n)}, {x: Random(min,max), y: 0, num: Random(min_n,max_n)}, {x: Random(min,max), y: 0, num: Random(min_n,max_n)} ];
	
	BG.graphics
		.clear()
		.beginFill("#000000")
		.drawRect(0, 0, WIDTH, HEIGHT);
  
	stage.addChild(BG);

	
	
	//y - номер строки
	//x - номер столбца(ячейки) всего от 0 до 6
	
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].xx = blocks[i].x * koeff ;
		blocks[i].yy = blocks[i].y * koeff ;
		
	}
	
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].block = new createjs.Shape();
		blocks[i].block.graphics
			.clear()
			.beginFill("#72FF21")
			.drawRect(blocks[i].x * koeff, blocks[i].y * koeff, h, w)
			//s.fillText(blocks[i].num, blocks[i].x * koeff + w / 2, blocks[i].y * koeff + h / 2 );
		 blocks[i].txt = new createjs.Text(blocks[i].num);  
		blocks[i].txt.font = "20px Arial";
	blocks[i].txt.textAlign = "center";
		blocks[i].txt.textBaseline = "middle";
		
		blocks[i].txt.color = "black";
		blocks[i].txt.x = blocks[i].xx + w / 2;
		blocks[i].txt.y = blocks[i].yy + h / 2;
	
		stage.addChild(blocks[i].block);
		stage.addChild(blocks[i].txt);
	}
	
	function numbers(i, num) {
		stage.removeChild(blocks[i].txt);
		blocks[i].txt = new createjs.Text(num);	  
		blocks[i].txt.font = "20px Arial";
		blocks[i].txt.textAlign = "center";
		blocks[i].txt.textBaseline = "middle";
		
		blocks[i].txt.color = "black";
		blocks[i].txt.x = blocks[i].xx + w / 2;
		blocks[i].txt.y = blocks[i].yy + h / 2;
		stage.addChild(blocks[i].txt);
	}
	function delet(i){
        if (blocks[i].num == 0) {
            stage.removeChild(blocks[i].block);
            stage.removeChild(blocks[i].txt);
            blocks.splice(i,1);
        }
    }
	function fly(){
		
		if (ball.y + ball.r >= HEIGHT) {
			state = 1;
			zdvig();
			
			stage.addEventListener('stagemousedown', 
			function(e) {
				console.log("dggdg");
				ball.vx = ((stage.mouseX - ball.x) / Math.sqrt((stage.mouseX - ball.x) * (stage.mouseX - ball.x) + (stage.mouseY - ball.y) * (stage.mouseY - ball.y))) * 12;
				ball.vy = ((-stage.mouseY + ball.y) / Math.sqrt((stage.mouseY - ball.y) * (stage.mouseY - ball.y) + (stage.mouseX - ball.x) * (stage.mouseX - ball.x))) * 12;
				console.log( stage.mouseX);
				state = 0;
				
			});
			
			
		}
	}
    function zdvig(){
        var len = blocks.length;
        if (ball.y + ball.r >= HEIGHT) {
			var numPool = [ 0, 1, 2, 3, 4, 5, 6 ];
			num();
            for ( var i = blocks.length ; i < Random(len,len + 7); i++){
                x = numPool[Math.floor(Math.random() * numPool.length)];
                numPool.splice(numPool.indexOf(x),1);
                blocks[i] = {x: x, y: -1, num: Random(min_n,max_n)}
                blocks[i].block = new createjs.Shape();
                blocks[i].xx = blocks[i].x * koeff ;
                blocks[i].yy = blocks[i].y * koeff ;
                stage.addChild(blocks[i].block);
                numbers(i, blocks[i].num);
            }
            for( var i = 0; i < blocks.length; i++){
                blocks[i].y +=1;
                blocks[i].yy = blocks[i].y * koeff;
                blocks[i].block.graphics
                    .clear()
                    .beginFill("#72FF21")
                    .drawRect(blocks[i].x * koeff, blocks[i].y * koeff, h, w)
                console.log(blocks[i]);
                numbers(i, blocks[i].num);
            }
        }
    }
	function num () {
		min_n = min_n + 1;
		max_n = max_n + 2;
	}
    function gameOver(){
		//state = 2;
        max = 0;
        for (var i = 0; i < blocks.length; i++){
            if (blocks[i].yy > HEIGHT - 30) {
			stage.removeChild(blocks);
            stage.removeChild(ball);
			console.log("fvgdfag");
			var GO = new createjs.Shape();
				GO.graphics
				.clear()
				.beginFill("#000000")
				.drawRect(0, 0, WIDTH, HEIGHT);
			stage.addChild(GO);
			var txt = new createjs.Text("GAME OVER\n\n") 
			var txt1 = new createjs.Text("\n \n \n Количество набранных очков: " + score);	  
			txt.font = "20px Arial";
			txt.color = "white";
			txt.x = 80;
			txt.y = 100;
			
			txt1.font = "10px Arial";
			txt1.color = "white";
			txt1.x = 70;
			txt1.y = 100;
			
			stage.addChild(txt,txt1);
			break;
			}
        }
	}
	//Анимация шарика
	var ball = new createjs.Shape();
	ball.graphics.beginFill("#F7A768")
		.drawCircle(0, 0, 10);
	ball.vx = 5;
	ball.vy = 5 ;
	ball.x = WIDTH / 2;
	ball.r = 10;
	ball.y = HEIGHT - ball.r;
	
	stage.addChild(ball);
	var score = 0;
  //пусть шарик сам себя анимирует
	ball.addEventListener('tick', 
		function(e) {
		if (state == 0) {
			for (var i = 0; i < blocks.length; i++) {
				
				if (
					ball.y - ball.r < blocks[i].yy + h && 
					ball.y + ball.r > blocks[i].yy && 
					ball.x + ball.r > blocks[i].xx && 
					ball.x - ball.r < blocks[i].xx + w
				) { 
					score = score + 1;
					//console.log(score);
					var a = ball.x - blocks[i].xx - w / 2;
					var b = ball.y - blocks[i].yy - h / 2;
					if (b > a && b > -a){
						ball.vy = - ball.vy;
						console.log(ball.x, ball.y);
					}
					if (b > a && b < -a){
						ball.vx = - ball.vx;
						console.log(ball.x, ball.y);
					}
					if (b < a && b < -a){
						ball.vy = - ball.vy;
						console.log(ball.x, ball.y);
					}
					if (b < a && b > -a){
						ball.vx = - ball.vx;
						console.log(ball.x, ball.y);
					}
					if (a == b || -a == b){
						ball.vy = - ball.vy;
						ball.vx = - ball.vx;
						
					}
			
                        if (blocks[i].num  != 0) {
                            blocks[i].num = blocks[i].num - 1;
                            numbers(i, blocks[i].num);
                        } 
                        if(blocks[i].num  == 0)
                            delet(i);
                    
					
			    }
			}
			
			if (ball.x + ball.r >= WIDTH + X0) {
				ball.x = ball.x - 2 * (ball.x + ball.r - WIDTH - X0);
				ball.vx = -ball.vx;
				console.log(ball.x , ball.vx);
			}
			if (ball.y + ball.r >= HEIGHT + Y0) {
				ball.y = ball.y - 2 * (ball.y + ball.r - HEIGHT - Y0);
				ball.vy = -ball.vy;
			}
			if (ball.x - ball.r <= X0) {
				ball.x = ball.x + 2 * (X0 - ball.x + ball.r);
				ball.vx = -ball.vx;
			}
				
			if (ball.y - ball.r <= Y0) {
				ball.y = ball.y - 2 * (ball.y - ball.r - Y0);
				ball.vy = -ball.vy;
			}
			console.log( ball.vx , ball.vy);
			ball.x += ball.vx;
			ball.y += ball.vy;
            
            gameOver();
			fly();
			} else console.log(state);
		}
	);
}

function Random(a, b) {
	return Math.floor(Math.random() * (b + 1 - a) + a);
}