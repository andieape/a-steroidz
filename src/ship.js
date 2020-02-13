export default class Ship {

    constructor(gameWidth, gameHeight){
        this.size = this.width = this.height = 20;
       
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

       

        this.velocityX = 0;
        this.velocityY = 0;
        this.maxVelocityX = this.maxVelocityY = 2;
        

        this.friction = 0.98;
      

       
        this.x = this.gameWidth / 2 - this.width / 2;
        this.y = this.gameHeight /2 - this.height - 10;
        
    }

    
    draw(ctx) {

        
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
       // ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
        
     
    }


    moveLeft() {
        if(this.velocityX > -this.maxVelocityX){
            this.velocityX--;
        }
    }

    moveRight() {
        if(this.velocityX < this.maxVelocityX){
            this.velocityX++;
        }
        
    }

    moveUp(){
        if(this.velocityY > -this.maxVelocityY){
            this.velocityY--;
        }
       
       

    }

    moveDown(){
        
        if(this.velocityY < this.maxVelocityY){
            this.velocityY++;
        }
    
    }
    
    
     
    update(deltaTime, ctx) {

        if (!deltaTime) return;
        
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        this.x += this.velocityX;
        this.y += this.velocityY;
      

        //this.rotate(this.angle);

        if (this.x > this.gameWidth) {
            this.x = 0;
        } else if (this.x < 0){
            this.x = this.gameWidth;
           
          } else if (this.y > this.gameHeight) {
            this.y = 0; 
            
          } else if (this.y < 0) {
              this.y = this.gameHeight;
          }
        
    }

    

}