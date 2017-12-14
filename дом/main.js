function init() {
  console.info("initialized"); //console.log,info,error,warn,debug
  var stage = new createjs.Stage("game");
  
    var A = 150;
	var B = A / Math.sqrt(2);
	var X0 = 300;
	var Y0 = 200;
	
	//создать контейнер, на него положить стены и крышу. Поместить контейнер в координаты X0, Y0
 
	//var a = Math.sqrt(90 * 90 / 2) - 100;
	var roof = new createjs.Shape();
	stage.addChild(roof);
	roof.graphics
		//.setStrokeStyle(1) //толщина
		.beginFill("red") //цвет
		.drawRect(-B / 2, -B / 2, B, B);
		
	roof.x = X0;
	roof.y = Y0 - A / 2;
	roof.rotation = 45;
	
	// -------------------------------------------------
	
	var body = new createjs.Shape();
	stage.addChild(body);
	body.graphics
		//.setStrokeStyle(100) //толщина
		.beginFill("green") //цвет
		.drawRect(-A / 2, -A / 2, A, A);
	body.x = X0;
	body.y = Y0;
	//body.compositeOperation = "difference";
	
	/*var roof = new createjs.Shape();
	stage.addChild(roof);
	roof.graphics
		.setStrokeStyle(10) //толщина
		.beginStroke("green") //цвет
		.moveTo(20,20)
		.lineTo(70,70)
		.lineTo(10,50)
		.lineTo(40,80)
	roof.x = 200;
	roof.y = 200;
	roof.compositeOperation = "difference";
	*/
	console.log(Math.sqrt(90*90 / 2));
	
	//roof.compositeOperation = "difference";
	
	stage.update(); 
 
  
 

}