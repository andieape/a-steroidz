export default class Shot {
    constructor(x, y, heading) {
        this.x = x;
        this.y = y;
        this.heading = heading;
        this.velocity = 75;
        this.size = 3;
        this.age = 0;

        
    }
    
    draw(ctx) {
        ctx.fillStyle = '#CD0000';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    moveCursor(e){
        
        this.x = e.clientX;
        this.y = e.clientY;
      
       
        
    }
 
} 