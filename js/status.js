import  { player1, player2 } from '/js/sketch.js';

var timeGame;
var fr = 30; //starting FPS

const s = ( sketch ) => {

  sketch.preload = function(){

  }

  sketch.setup = function(){
    sketch.createCanvas(300, 300);
    timeGame = 120;
  }

  sketch.draw = function(){
    showScore();
    showtimeGame();
  }

  function showScore(){
    sketch.textSize(24);
    sketch.fill(255);

    sketch.text('Score Player 1:', 20, 20);
    sketch.text(player1.score, 200, 20);

    sketch.text('Score Player 2:', 20, 70);
    sketch.text(player2.score, 200, 70);
  }

  function showtimeGame(){
    sketch.text('Time :', 20, 120);
    if(sketch.frameCount % fr == 0 && timeGame != 0) {
      timeGame--;
    }

    sketch.text(timeGame, 200, 120);
  }


}

var myp5 = new p5(s, 'myContainerStatus');
