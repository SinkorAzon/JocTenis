import { startArray } from 'js/config.js';

export default class Ball {
    constructor(sketch){
      this.spriteBall = sketch.createSprite(400, 400);
      this.spriteBall.setCollider("rectangle", (this.spriteBall.width/2 -50), (-this.spriteBall.width/2 +50), 30, 30);
      this.spriteBall.addAnimation('spinning', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
      'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
      'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
      'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
      'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
      'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
      'assets/ball/tile017.png');
      this.spriteBall.addAnimation('moving', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
      'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
      'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
      'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
      'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
      'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
      'assets/ball/tile017.png');
      this.spriteBall.addAnimation('movingFire', 'assets/fireball/tile000.png',
      'assets/fireball/tile001.png', 'assets/fireball/tile002.png',
      'assets/fireball/tile003.png', 'assets/fireball/tile004.png');
      this.spriteBall.addAnimation('floating', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
      'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
      'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
      'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
      'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
      'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
      'assets/ball/tile017.png');
      this.spriteBall.maxSpeed = 20;
    }

    startGame(sketch){
      let angle = sketch.random(60, 140);
      this.spriteBall.setSpeed(5, angle);
    }

    startGameAfterPoint(sketch, strPlayer){
      let angle;
      if(strPlayer == "player1"){
        angle = sketch.random(210, 330);
        while(angle > 260 && angle < 280){
          angle = sketch.random(210, 330);
        }
      } else if(strPlayer == "player2"){
        angle = sketch.random(60, 140);
        while(angle > 80 && angle < 100){
          angle = sketch.random(210, 330);
        }
      }


      switch (startArray[2]) {
        case "1":
          this.spriteBall.setSpeed(2, angle);
          break;
        case "2":
          this.spriteBall.setSpeed(4, angle);
          break;
        case "3":
          this.spriteBall.setSpeed(6, angle);
          break;
        case "4":
          this.spriteBall.setSpeed(8, angle);
          break;
      }
    }

    moveBall(sketch){
      this.bounce(sketch);
    }

    bounceBorder(sketch){
      if(this.spriteBall.position.x < (this.spriteBall.width/2 + 50) || this.spriteBall.position.x > sketch.width - (this.spriteBall.width/2 + 50)){
        this.spriteBall.velocity.x *= -1;
      }

      if(this.spriteBall.position.y < this.spriteBall.height/2 || this.spriteBall.position.y > sketch.height - this.spriteBall.height/2){
        this.spriteBall.velocity.y *= -1;
      }

      if(this.spriteBall.getSpeed() > 10) {
        this.spriteBall.changeAnimation('movingFire');
      } else {
        this.spriteBall.changeAnimation('moving');
      }
    }

    bouncePlayer(player){
      if(this.spriteBall.bounce(player.spritePlayer) && this.spriteBall.getSpeed() < 20){
          this.spriteBall.setSpeed(this.spriteBall.getSpeed() * 1.075);
          console.log(this.spriteBall.getSpeed());
          //player.spritePlayer.changeAnimation('attack');
      }
    }

    scoreGame(sketch){
      if(this.spriteBall.position.y < (0 + this.spriteBall.height/2)){
        return 1;
      } else if(this.spriteBall.position.y > (sketch.height - this.spriteBall.height/2)){
        return 2;
      }
    }
}
