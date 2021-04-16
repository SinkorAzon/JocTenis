export default class Player{
    constructor(strPlayer, sketch){
      this.velocity = 5;
      this.score = 0;
      if(strPlayer == "player1"){
        this.spritePlayer = sketch.createSprite(400, 790);
        this.spritePlayer.addAnimation('moving', 'assets/player1/run/tile000.png', 'assets/player1/run/tile001.png',
        'assets/player1/run/tile002.png', 'assets/player1/run/tile003.png', 'assets/player1/run/tile004.png',
        'assets/player1/run/tile005.png', 'assets/player1/run/tile006.png', 'assets/player1/run/tile007.png');
        this.spritePlayer.addAnimation('impactball', 'assets/player1/attack/tile000.png', 'assets/player1/attack/tile001.png',
        'assets/player1/attack/tile002.png', 'assets/player1/attack/tile003.png', 'assets/player1/attack/tile004.png',
        'assets/player1/attack/tile005.png');
        this.spritePlayer.addAnimation('death', 'assets/player1/death/tile000.png', 'assets/player1/death/tile001.png',
        'assets/player1/death/tile002.png', 'assets/player1/death/tile003.png', 'assets/player1/death/tile004.png',
        'assets/player1/death/tile005.png');
      }
      if(strPlayer == "player2"){
        this.spritePlayer = sketch.createSprite(400, 50);
        this.spritePlayer.addAnimation('moving', 'assets/player2/run/tile000.png', 'assets/player2/run/tile001.png',
        'assets/player2/run/tile002.png', 'assets/player2/run/tile003.png', 'assets/player2/run/tile004.png',
        'assets/player2/run/tile005.png', 'assets/player2/run/tile006.png', 'assets/player2/run/tile007.png',
        'assets/player2/run/tile008.png', 'assets/player2/run/tile009.png', 'assets/player2/run/tile010.png',
        'assets/player2/run/tile011.png');
        this.spritePlayer.addAnimation('impactball', 'assets/player2/attack/tile000.png', 'assets/player2/attack/tile001.png',
        'assets/player2/attack/tile002.png', 'assets/player2/attack/tile003.png', 'assets/player2/attack/tile004.png');
        this.spritePlayer.addAnimation('death', 'assets/player2/death/tile000.png', 'assets/player2/death/tile001.png',
        'assets/player2/death/tile002.png', 'assets/player2/death/tile003.png', 'assets/player2/death/tile004.png',
        'assets/player2/death/tile005.png', 'assets/player2/death/tile006.png', 'assets/player2/death/tile007.png',
        'assets/player2/death/tile008.png', 'assets/player2/death/tile009.png', 'assets/player2/death/tile010.png',
        'assets/player2/death/tile011.png', 'assets/player2/death/tile012.png', 'assets/player2/death/tile013.png',
        'assets/player2/death/tile014.png', 'assets/player2/death/tile015.png', 'assets/player2/death/tile016.png',
        'assets/player2/death/tile017.png');
      }
    }

    moveLeft(sketch){
      this.spritePlayer.velocity.x = this.velocity * -1;
      this.spritePlayer.mirrorX(-1);
    }

    limitGame(sketch){
      if(this.spritePlayer.position.x <= 55){
        this.spritePlayer.velocity.x = 0;
      }
      if(this.spritePlayer.position.x > (sketch.width - 70)){
        this.spritePlayer.velocity.x = 0;
      }
    }

    moveRight(sketch){
      this.spritePlayer.velocity.x = this.velocity * 1;
      this.spritePlayer.mirrorX(1);
    }
}
