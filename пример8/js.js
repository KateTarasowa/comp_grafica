function init() {
	console.info("initialized");
	var stage = new createjs.Stage("game");
	createjs.Ticker.addEventListener('tick', stage);
	createjs.Ticker.framerate = 30;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	  
	var cat = new createjs.Shape();
	cat.x = 200;
	cat.y = 100;
	

	cat.graphics
		.clear()
		.beginFill("#ff6e4a")
		.beginStroke("#000000")
		.drawCircle(0, 0, 30);
		
	var dog = new createjs.Shape();
	

	dog.graphics
		.clear()
		.beginFill("#cc5500")
		.drawRect(0, 0, 500, 300);
  
	stage.addChild(dog);
	stage.addChild(cat);
    
	stage.addEventListener('click',  function(e) {
		var t = createjs.Tween.get(cat, { override: true});
		t.to({x: e.stageX, y: e.stageY}, 1000, createjs.Ease.linear );
		console.log("координата", e.stageX, e.stageY);
	});
}