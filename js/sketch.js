const s = ( sketch ) => {
  var player1;
  var player2;
  var ball;
  var maze;

  sketch.preload = function(){

  }

  sketch.setup = function(){
    createCanvas(800, 800);
    sketch.createObjects();
    maze = sketch.loadImage('image/mapa.jpg');
  }

  sketch.createObjects = function(){
    player1 = createSprite(400, 150, 50, 100);
    player1.addAnimation('moving', 'assets/player1/run/tile000.png', 'assets/player1/run/tile001.png',
    'assets/player1/run/tile002.png', 'assets/player1/run/tile003.png', 'assets/player1/run/tile004.png',
    'assets/player1/run/tile005.png', 'assets/player1/run/tile006.png', 'assets/player1/run/tile007.png');
    player1.addAnimation('impactball', 'assets/player1/attack/tile000.png', 'assets/player1/attack/tile001.png',
    'assets/player1/attack/tile002.png', 'assets/player1/attack/tile003.png', 'assets/player1/attack/tile004.png',
    'assets/player1/attack/tile005.png');
    player1.addAnimation('death', 'assets/player1/death/tile000.png', 'assets/player1/death/tile001.png',
    'assets/player1/death/tile002.png', 'assets/player1/death/tile003.png', 'assets/player1/death/tile004.png',
    'assets/player1/death/tile005.png');

    player2 = createSprite(400, 150, 50, 100);
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
    'assets/player2/death/tile011.png', 'assets/player2/death/tile012.png', 'assets/player2/death/tile013.png'
    'assets/player2/death/tile014.png', 'assets/player2/death/tile015.png', 'assets/player2/death/tile016.png'
    'assets/player2/death/tile017.png');

    ball = createSprite(200,200,50,100);
    ball.addAnimation('spinning', 'assets/ball/...');
    ball.addAnimation('moving', 'assets/ball/...');
    ball.addAnimation('floating', 'assets/ball/...');
  }

  sketch.draw = function(){
    sketch.background(255, 255, 255);
    sketch.accioBall();
    sketch.movePlayer1();
    sketch.movePlayer2();
  }

  sketch.accioBall = function(){
    if(sketch.mouseX < ball.position.x - 10) {
      ball.changeAnimation('moving');
      ball.mirrorX(-1);
      ball.velocity.x = -2;
    } else if(sketch.mouseX > ball.position.x + 10) {
      ball.changeAnimation('moving');
      ball.mirrorX(1);
      ball.velocity.x = 2;
    } else {
      ball.changeAnimation('floating');
      ball.velocity.x = 0;
    }

    if(sketch.mouseIsPressed) {
      ball.rotation -= 10;
      ball.changeAnimation('spinning');
    } else {
      ball.rotation = 0;
    }
  }

  sketch.movePlayer1 = function(){

  }

  sketch.movePlayer2 = function(){

  }
}

var myp5 = new p5(s, 'myContainer');
