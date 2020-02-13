import Enemy from './enemy.js';

export default class EnemySpam {
    constructor(gameWidth, gameHeight, game){

        this.game = game;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.sizes = [30, 40, 60];
        this.enemyCount = 30;
        this.enemieS = [];
        this.enemySplit = 3;
        this.minVel = 10;
        this.maxVel = 30;

        for (let i=0; i < this.enemyCount; i++) {
            this.enemieS.push(this._spam()); //fun
        }

        
        
    }

    hit(bullet, enemy){
      
           if (enemy.size === 30){
            enemy.size = 0;
           
        } else if (enemy.size === 40){
          
            this.enemieS.push(new Enemy(enemy.x+20,enemy.y+20,Math.random()*180,enemy.velocity+10,enemy.size/2, this.game));
            this.enemieS.push(new Enemy(enemy.x-20,enemy.y-20,Math.random()*180,enemy.velocity+10,enemy.size/2, this.game));
           
        } else if(enemy.size === 60){
            this.enemieS.push(new Enemy(enemy.x+20,enemy.y+20,Math.random()*180,enemy.velocity+10,enemy.size/2, this.game));
            this.enemieS.push(new Enemy(enemy.x-20,enemy.y-20,Math.random()*180,enemy.velocity+10,enemy.size/2, this.game));
            this.enemieS.push(new Enemy(enemy.x-20,enemy.y+20,Math.random()*180,enemy.velocity+10,enemy.size/2, this.game));

        }
            enemy.size = 0;
            this.enemieS = this.enemieS.filter(enemy => enemy.size > 0);



        
    }
   


    draw(ctx) {     
       

        for (let enemi of this.enemieS) {            
            enemi.draw(ctx);
        }
    }

    _spam(){
        let spotX = Math.random() * this.gameWidth;
        let spotY = Math.random() * this.gameHeight;
        
        let heading = Math.floor(Math.random() * 360);
        let velocity = this.minVel + (Math.random()*(this.maxVel - this.minVel));
        

        let size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
        let type = 'enemy'+size;
        return new Enemy(spotX,spotY,heading,velocity,size, this.game);
    }
    
}