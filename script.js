$(function(){
    canvas=document.getElementById('MyCanvas');
    ctx=canvas.getContext('2d');
    ctx.rotate((Math.PI *  1/10));
    
    function filledStar(x,y,a){
        ctx.moveTo(x,y);
        ctx.translate(x,y);
        
        for (var i = 5; i--;) {
           
            // draw line up
            ctx.lineTo(0, a);
            // move origin to current same location as pen
            ctx.translate(0, a);
            // rotate the drawing board
            ctx.rotate((Math.PI * 2 / 10));
            // draw line down
            ctx.lineTo(0, -a);
            // again, move origin to pen...
            ctx.translate(0, -a);
            // ...and rotate, ready for next arm
            ctx.rotate(-(Math.PI * 6 / 10));
            
        }
        
       
        ctx.lineTo(0, a);
        ctx.closePath();
        
       
    }
    
    filledStar(40,30,15);
filledStar(100,70,20);
filledStar(150,100,55);
ctx.stroke();
    
   
   
});
