var player1 = new Player1();
var player2 = new Player2();
var ball = new Ball();
var imageMap;

const s = ( sketch ) => {

  sketch.preload = function(){
    imageMap = sketch.loadImage('image/mapa.jpg');
  }

  sketch.setup = function(){
    sketch.createCanvas(800, 840);
    createObjects();
  }

  function createObjects(){
    player1 = sketch.createSprite(400, 790);
    player1.addAnimation('moving', 'assets/player1/run/tile000.png', 'assets/player1/run/tile001.png',
    'assets/player1/run/tile002.png', 'assets/player1/run/tile003.png', 'assets/player1/run/tile004.png',
    'assets/player1/run/tile005.png', 'assets/player1/run/tile006.png', 'assets/player1/run/tile007.png');
    player1.addAnimation('impactball', 'assets/player1/attack/tile000.png', 'assets/player1/attack/tile001.png',
    'assets/player1/attack/tile002.png', 'assets/player1/attack/tile003.png', 'assets/player1/attack/tile004.png',
    'assets/player1/attack/tile005.png');
    player1.addAnimation('death', 'assets/player1/death/tile000.png', 'assets/player1/death/tile001.png',
    'assets/player1/death/tile002.png', 'assets/player1/death/tile003.png', 'assets/player1/death/tile004.png',
    'assets/player1/death/tile005.png');


    player2 = sketch.createSprite(400, 50);
    player2.addAnimation('moving', 'assets/player2/run/tile000.png', 'assets/player2/run/tile001.png',
    'assets/player2/run/tile002.png', 'assets/player2/run/tile003.png', 'assets/player2/run/tile004.png',
    'assets/player2/run/tile005.png', 'assets/player2/run/tile006.png', 'assets/player2/run/tile007.png',
    'assets/player2/run/tile008.png', 'assets/player2/run/tile009.png', 'assets/player2/run/tile010.png',
    'assets/player2/run/tile011.png');
    player2.addAnimation('impactball', 'assets/player2/attack/tile000.png', 'assets/player2/attack/tile001.png',
    'assets/player2/attack/tile002.png', 'assets/player2/attack/tile003.png', 'assets/player2/attack/tile004.png');
    player2.addAnimation('death', 'assets/player2/death/tile000.png', 'assets/player2/death/tile001.png',
    'assets/player2/death/tile002.png', 'assets/player2/death/tile003.png', 'assets/player2/death/tile004.png',
    'assets/player2/death/tile005.png', 'assets/player2/death/tile006.png', 'assets/player2/death/tile007.png',
    'assets/player2/death/tile008.png', 'assets/player2/death/tile009.png', 'assets/player2/death/tile010.png',
    'assets/player2/death/tile011.png', 'assets/player2/death/tile012.png', 'assets/player2/death/tile013.png',
    'assets/player2/death/tile014.png', 'assets/player2/death/tile015.png', 'assets/player2/death/tile016.png',
    'assets/player2/death/tile017.png');

    ball = sketch.createSprite(400, 400);
    ball.addAnimation('spinning', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
    'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
    'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
    'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
    'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
    'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
    'assets/ball/tile017.png');
    ball.addAnimation('moving', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
    'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
    'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
    'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
    'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
    'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
    'assets/ball/tile017.png');
    ball.addAnimation('floating', 'assets/ball/tile000.png', 'assets/ball/tile001.png',
    'assets/ball/tile002.png', 'assets/ball/tile003.png', 'assets/ball/tile004.png',
    'assets/ball/tile005.png', 'assets/ball/tile006.png', 'assets/ball/tile007.png',
    'assets/ball/tile008.png', 'assets/ball/tile009.png', 'assets/ball/tile010.png',
    'assets/ball/tile011.png', 'assets/ball/tile012.png', 'assets/ball/tile013.png',
    'assets/ball/tile014.png', 'assets/ball/tile015.png', 'assets/ball/tile016.png',
    'assets/ball/tile017.png');
  }

  sketch.draw = function(){
    sketch.background(imageMap);
    sketch.accioBall();
    sketch.movePlayer1();
    sketch.movePlayer2();
    sketch.drawSprites();
  }

  sketch.accioBall = function(){

  }

  sketch.movePlayer1 = function(){
    if (sketch.keyCode === sketch.LEFT_ARROW) {
      player1.velocity.x = -2;
    } else if (sketch.keyCode === sketch.RIGHT_ARROW) {
      player1.velocity.x = +2;;
    } else if (sketch.keyCode === sketch.UP_ARROW) {
      player1.velocity.y = -2;
    } else if (sketch.keyCode === sketch.DOWN_ARROW) {
      player1.velocity.y = +2;;
    }
  }

  sketch.movePlayer2 = function(){
    if (sketch.key === "a") {
      player2.velocity.x = -2;
    } else if (sketch.key === "d") {
      player2.velocity.x = +2;;
    } else if (sketch.key === "w") {
      player2.velocity.y = -2;
    } else if (sketch.key === "sdd") {
      player2.velocity.y = +2;;
    }
  }
}

var myp5 = new p5(s, 'myContainer');
