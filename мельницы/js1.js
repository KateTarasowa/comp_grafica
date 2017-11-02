function init() {
    console.info("initialized"); //console.log,info,error,warn,debug
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d'); /*или назвать ctx*/
    
    /*drawings go here*/
    
    var a = 0;
    var b = 0;
    var prev_frame_time = new Date().getTime();
    
    requestAnimationFrame(frame);
    function frame() { 
        requestAnimationFrame(frame);
        
        var current_time = new Date().getTime();
        a = a + 20 * Math.PI / 180 * (current_time - prev_frame_time) / 1000;
        b = b + 100 * Math.PI / 180 * (current_time - prev_frame_time) / 1000;
        prev_frame_time = current_time;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        drawMill(a);
        
        ctx.restore();
    }
  
    function drawMill(a) {
        ctx.save(); //1
        
        ctx.rotate(a);
        for (var i = 0; i < 12; i ++) {
            drawBlade(i);
            ctx.rotate(30 * Math.PI / 180);
        }
        ctx.restore(); //1
    }
    
    function drawBlade(i) {
        ctx.save();
        
        ctx.beginPath();
        ctx.strokeStyle = "rgba(137, 27, 243, 1)";
        ctx.lineWidth = 8;
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.translate(100, 0);
        ctx.rotate(-a);
        ctx.rotate(-i * 30 * Math.PI / 180);
        
        drawNitochka();
        //
        
        ctx.restore();
    }
    
    
    function drawNitochka() {
        ctx.save(); 
        ctx.strokeStyle = "rgba(234, 127, 21, 1)";
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 30);
        ctx.stroke();
         ctx.translate(0, 30);
         ctx.rotate(b);
        for (var i = 0; i < 12; i ++) {
            drawBlade2(i);
            ctx.rotate(30 * Math.PI / 180);
        }
        ctx.restore();
    }
    function drawBlade2(i) {
        ctx.save();
        
        ctx.beginPath();
        ctx.strokeStyle = "rgba(132, 32, 13, 1)";
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(20, 0);
        ctx.stroke();
        //ctx.rotate(-a);
        //ctx.rotate(-i * 30 * Math.PI / 180);
       
        //
        
        ctx.restore();
    }
}