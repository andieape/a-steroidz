export default class Controls {
    constructor(ship, game, shot, bullet) {

       

        document.addEventListener("keydown", e => {   
            switch(e.keyCode){
                case 37:
                   
                    ship.moveLeft();
                    break;

                case 38:
                    ship.moveUp();

                    break;

                case 39:
                    ship.moveRight();

                    break;
                    
                case 40:
                    ship.moveDown();

                    break;
                case 32:
                    document.location.reload(true);
                    break;                
            }

            e.preventDefault();
        });


        document.addEventListener("keyup", e => {                     
          
        });
       
        document.addEventListener('mousemove', e => {       
            shot.moveCursor(e);
        });
      
      document.addEventListener('mousedown', e => {
        bullet.shootBullet(e);
    
     });
    } 
             
    


    }
