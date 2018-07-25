$(function(){
    canvas=document.getElementById('MyCanvas');
    ctx=canvas.getContext('2d');
    ctx.rotate((Math.PI *  1/10));
    
    function filledStar(x,y,a){
        ctx.moveTo(x,y);
        ctx.translate(x,y);
        
        for (var i = 5; i--;) {
            ctx.lineTo(0, a);
            ctx.translate(0, a);
            ctx.rotate((Math.PI * 2 / 10));
            ctx.lineTo(0, -a);
            ctx.translate(0, -a);
            ctx.rotate(-(Math.PI * 6 / 10));
            
        }
        ctx.lineTo(0, a);
        ctx.closePath();
    }
    filledStar(60,40,20);
    filledStar(160,50,30);
    filledStar(200,45,40);
    ctx.fillStyle='#ea9fb9';
    ctx.fill();
  
});
