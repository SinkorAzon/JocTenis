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
    movePlayer();
  }

  function movePlayer() {
    if(sketch.keyIsDown(sketch.LEFT_ARROW)) {
      player1.moveLeft(sketch);
    } else if(sketch.keyIsDown(sketch.RIGHT_ARROW)) {
      player1.moveRight(sketch);
    } else {
      player1.stopMovePlayer();
    }

    if(sketch.keyIsDown(65)) {
      player2.moveLeft(sketch);
    } else if(sketch.keyIsDown(68)) {
      player2.moveRight(sketch);
    } else {
      player2.stopMovePlayer();
    }
  }
}

var myp5 = new p5(s, 'myContainer');
