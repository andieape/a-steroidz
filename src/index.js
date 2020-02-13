import Ship from './ship.js';
import Controls from './controls.js';
import Enemy from './enemy.js';
import EnemySpam from './enemyspam.js';
import Shot from './shot.js';
import Bullet from './bullet.js';


export default class Game {
  constructor(gameWidth, gameHeight) {
    
    this.container = document.getElementById('content');
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.prevUpdateTime = 0;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    

    this.shot = new Shot();

    this.ship = new Ship(this.gameWidth, this.gameHeight);
    this.enemy = new Enemy(this.x, this.y, this.heading, this.velocity, this.size);
    this.enemi = new EnemySpam(this.gameWidth, this.gameHeight, this);
    this.shot = new Shot(this.ship.x, this.ship.y, 200);
    this.bullet = new Bullet(this.enemi, this.ship, this);
    this.score = 0;

    this.state = "PLAY";

    new Controls(this.ship, this, this.shot, this.bullet);

    this.init();
    
  }
 

  init() {
    window.addEventListener("resize", x => this.onResize());
    this.onResize();

    requestAnimationFrame((time) => this.update(time));
  }

  onResize() {
    this.gameWidth = this.container.clientWidth;
    this.gameHeight = this.container.clientHeight;
    
    this.canvas.width = this.gameWidth;
    this.canvas.height = this.gameHeight;
  }

  draw(ctx){

    var background = new Image();
        background.src = "https://i.imgur.com/txu2hnZ.png";
        ctx.drawImage(background,0,0); 
     

    this.ship.draw(ctx);
    this.enemi.draw(ctx);
    this.bullet.draw(ctx);
    this.shot.draw(ctx);    
    
    this._ui(ctx, this.state);
  }

  update(time) {
    const deltaTime = time - this.prevUpdateTime;
    this.prevUpdateTime = time;
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.draw(this.ctx);   
  
    //this.enemy.update(deltaTime);

    this.ship.update(deltaTime);
  
    this.bullet.update(deltaTime);  

    this._checkCol();
    this._moveAster(this.enemi.enemieS, deltaTime);
    
    requestAnimationFrame((time) => this.update(time));
    
  }

  _checkCol(){
    for (let enemy of this.enemi.enemieS){
      
        if(this._collide(this.bullet, enemy)){
          this.enemi.hit(this.bullet, enemy);
          this.score += 100;
              if (enemy.size == 30){
                this.score += 10;         
              } else if (enemy.size == 40){
              this.score += 20;
              } else if (enemy.size == 60){
              this.score += 30;
              } else if (this.enemi.enemieS.length === 0){
                this.state = 'WIN'
              }
          
         
        } else if(this._collide(this.ship, enemy)){
          
          this.state = 'LOSE';
          
        }
    }
   
      };
      
      
  

  _die(obj){
      obj.velocity = 0;
     
  }  



  
 _collide(objA, objB) {
   var ax = Math.round(objA.x);
  var ay = Math.round(objA.y + objA.size);
        

  var bx = Math.round(objB.x);
  var by = Math.round(objB.y);

  

  
  
  if ((ax + objA.size ) >= (bx - objB.size / 2) &&
      (ax ) <= (bx + objB.size / 2) &&
      (ay + objA.size /2) >= (by - objB.size /4) &&
      (ay - objA.size /2) <= (by + objB.size )) {
       

      
      return true;       
             
      }   
    }



    _moveAster(aster, deltaTime){
      for (let astera of aster){
    
     
      astera.x += Math.cos(astera.heading* (Math.PI / 180))* astera.velocity*deltaTime/300;
      astera.y += Math.sin(astera.heading* (Math.PI / 180))* astera.velocity*deltaTime/300;
      
      if (astera.x >= this.gameWidth){
       
        astera.x = 0;
      } else if (astera.y >= this.gameHeight) {
        astera.y = 0;
      } else if (astera.x <= 0){
        astera.x = this.gameWidth;
      } else if (astera.y <= 0){
        astera.y = this.gameHeight;
      }
    
    }    
    }

    _ui(ctx, state) {

      if (state === 'PLAY'){
        ctx.font = "12px verdana";
        ctx.fillStyle = "white";
        ctx.strokeText("Score: "+ `${this.score}`, 10, 20);
        ctx.strokeText(`${state}`, 10, 30);
      } else if (state === 'WIN'){
        ctx.font = "20px verdana";
        ctx.textAlign = 'center';
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.strokeText("YOU WON!", this.gameWidth/1.9, this.gameWidth/2.4);
        ctx.strokeText("Score: "+ `${this.score}`, this.gameWidth/1.9, this.gameWidth/2.2);
        ctx.strokeText("[space] to try again!", this.gameWidth/1.9, this.gameWidth/2);

      } else if (state === 'LOSE'){
        ctx.fillStyle = "white";
        ctx.font = "20px verdana";
        ctx.textAlign = 'center';
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.strokeText("LOST!", this.gameWidth/1.9, this.gameWidth/2.4);
       ctx.strokeText("Score: "+ `${this.score}`, this.gameWidth/1.9, this.gameWidth/2.2);
       ctx.strokeText("[space] to try again!", this.gameWidth/1.9, this.gameWidth/2);
      }
  
    }
    
}

var GAME_WIDTH = document.getElementById('content').clientWidth;
var GAME_HIGHT = document.getElementById('content').clientHeight;




new Game(GAME_WIDTH, GAME_HIGHT);