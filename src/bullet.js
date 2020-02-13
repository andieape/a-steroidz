


export default class Bullet {

    constructor(enemi, ship, game) {
        this.ship = ship;
        this.enemi = enemi;
        this.game = game;

        this.x = 0;
        this.y = 0;
        this.dx = 0.0;
        this.dy = 0.0;
       
        this.velo = 10;
        this.size = 2;
        this.type = 'bullet';

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        
        
        
    }
        

        
        draw(ctx){
           
         
            ctx.strokeStyle = "purple";
           

            ctx.fillRect(this.x-this.size, this.y+this.size/2, this.size, this.size, 'red');
            


        }


        shootBullet(e){

           
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            let vecX = mouseX - this.ship.x;
            let vecY = mouseY - this.ship.y;
       

            var way = Math.sqrt(vecX * vecX + vecY * vecY);

            vecX = vecX / way;
            vecY = vecY / way;
                    
			this.x = this.ship.x + this.ship.size/2;
			this.y = this.ship.y + this.ship.size/2;
            
            this.dx = vecX * this.velo;
            this.dy = vecY *this.velo;
            
        }         
                   
        

        update(deltaTime){
            if (!deltaTime) return;   
          
            this.x += this.dx / 4;
            this.y += this.dy / 4;

            if (this.x >= this.gameWidth || this.y >= this.gameHeight || this.x <= 0 || this.y <= 0){
                return;
            }         
        
        }
    }
