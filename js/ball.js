export default class Ball {
    constructor(sketch){
      this.spriteBall = sketch.createSprite(400, 400);
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
      this.spriteBall.addAnimation('floating', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
      'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
      'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
      'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
      'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
      'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
      'assets/ball/tile017.png');
    }

    iniciJoc(sketch){
      let angle = sketch.random(210, 330);
      this.spriteBall.setSpeed(5, angle);
    }

    moveBall(sketch){
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      this.bounce(sketch);
    }

    bounceBorder(sketch){
      if(this.spriteBall.position.x < (this.spriteBall.width/2 + 50) || this.spriteBall.position.x > sketch.width - (this.spriteBall.width/2 + 50)){
        this.spriteBall.velocity.x *= -1;
      }

      if(this.spriteBall.position.y < this.spriteBall.height/2 || this.spriteBall.position.y > sketch.height - this.spriteBall.height/2){
        this.spriteBall.velocity.y *= -1;
      }

    }
}
