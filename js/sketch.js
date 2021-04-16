import Ball from "/js/ball.js";
import Player from "/js/player.js";

var player1;
var player2;
var ball;
var imageMap;

const s = ( sketch ) => {

  sketch.preload = function(){
    imageMap = sketch.loadImage('image/mapa.jpg');
    player1 = new Player("player1", sketch);
    player2 = new Player("player2", sketch);
    ball = new Ball(sketch);
  }


  sketch.setup = function(){
    sketch.createCanvas(800, 840);
    ball.iniciJoc(sketch);
  }

  sketch.draw = function(){
    sketch.background(imageMap);
    ball.bounceBorder(sketch);
    player1.limitGame(sketch);
    player2.limitGame(sketch);
    sketch.drawSprites();
  }

  sketch.keyPressed = function() {
    if(sketch.keyCode === sketch.LEFT_ARROW) {
      player1.moveLeft(sketch);
    } else if(sketch.keyCode === sketch.RIGHT_ARROW) {
      player1.moveRight(sketch);
    } else if(sketch.key == 'a') {
      player2.moveLeft(sketch);
    } else if(sketch.key == 'd') {
      player2.moveRight(sketch);
    }
  }
}

var myp5 = new p5(s, 'myContainer');
