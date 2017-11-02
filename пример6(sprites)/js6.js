/*function init() {
  console.info("initialized");
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d'); 
  balls_image = document.getElementById("balls");
  requestAnimationFrame(draw_frame);
  var frame = 0;
  function draw_frame(){
    requestAnimationFrame(draw_frame);
    frame += 1;
    var sprite_x = 50 * (frame% 10);
    var sprite_y = 50;
    ctx.drawImage(
    balls_image,
    sprite_x,sprite_y,// координаты
    50,50,//размер
    123,123,//где рисовать
    50,50
    );//размер рисования
    
  }
}//  не можем замедлять*/
function init() {
  console.info("initialized");
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d'); 
  balls_image = document.getElementById("balls");
  requestAnimationFrame(draw_frame);
  var program_start_time = new Date().getTime();
  var FRAME_PER_SECONS /*FPS*/ = 10;
  var BALL_SPRITE = {
      x0:0, y0: 50,
      w: 50, h:50,
      num: 10
  };
  function draw_frame(){
  
    requestAnimationFrame(draw_frame);
    var current_time = new Date().getTime();
    var time_from_start = current_time - program_start_time;
    var frame = Math.round(time_from_start / 1000 * FRAME_PER_SECONS);
    frame += 1;
    var sprite_x = BALL_SPRITE.x0 + BALL_SPRITE.w * (frame % BALL_SPRITE.num);
    ctx.drawImage(
        balls_image,
        sprite_x, BALL_SPRITE.y0,// координаты
        BALL_SPRITE.w, BALL_SPRITE.h,//размер
        123,123,//где рисовать
        BALL_SPRITE.w,BALL_SPRITE.h
    );//размер рисования
    
  }
  //заливка по шаблону
  ctx.fillStyle = ctx.createPattern(
    document.getElementById("pattern"),"repeat"
  );
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillRect(100,100,canvas.width, canvas.height);
  //Градиент                                          
  var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height                                                                                                                         );
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, '#006688');
gradient.addColorStop(1, 'blue');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,canvas.width, canvas.height);
}