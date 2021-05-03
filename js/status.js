import { player1, player2, startTime } from '../js/sketch.js';

export var timeGame = 0;
var fr = 60; //starting FPS

const s = ( sketch ) => {

  sketch.preload = function(){

  }

  sketch.setup = function(){
    sketch.createCanvas(300, 300);
    sketch.frameRate(fr); // Attempt to refresh at starting FPS
  }

  sketch.draw = function(){
    showScore();
    showTimeGame();
  }

  function showScore(){
    sketch.clear();
    sketch.textSize(24);
    sketch.fill(255);

    sketch.text('Score Player 1:', 20, 20);
    sketch.text(player1.score, 200, 20);

    sketch.text('Score Player 2:', 20, 70);
    sketch.text(player2.score, 200, 70);

  }

  function showTimeGame(){
    sketch.text('Time :', 20, 120);
    if(sketch.frameCount % fr == 0 && startTime == 1) {
      timeGame++;
    }
    sketch.text(timeGame, 200, 120);
  }
}

var myp5 = new p5(s, 'myContainerStatus');
