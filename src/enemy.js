

export default class Enemy {
    constructor(x, y, heading, velocity, size, game) {
        this.x = x;
        this.y = y;
        this.game = game;
        this.speed = 10;
        
        
        
        
        this.heading = heading;
        this.velocity = velocity;
        this.size = size;

        
        console.log(this);
    }


    
    draw(ctx) {
        
        let x = this.x - this.size / 2;
        let y = this.y - this.size / 2
      //  ctx.fillRect(x, y, this.size, this.size);
        var background = new Image();
     //  background.src = "./pics/aster.png";
     background.src = 'https://i.ya-webdesign.com/images/asteroid-sprite-png-6.png';  
     ctx.drawImage(background,this.x, this.y, this.size, this.size); 
       
        
       
    }

    update(deltaTime){
       
  
    }

    
}