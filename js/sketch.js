import Ball from "/js/ball.js";
import Player from "/js/player.js";
import { timeGame } from '/js/status.js';

export var player1;
export var player2;
var ball;
var updtScore;
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
    player1.spritePlayer.debug = sketch.mouseIsPressed;
    player2.spritePlayer.debug = sketch.mouseIsPressed;
    ball.spriteBall.debug = sketch.mouseIsPressed;

    sketch.background(imageMap);
    ball.bounceBorder(sketch);
    ball.bouncePlayer(player1);
    ball.bouncePlayer(player2);
    sketch.drawSprites();
    movePlayer();
    if(ball.scoreGame(sketch) == 1){
      sketch.noLoop();
      player1.score = player1.score + 1;
      if(player1.score == 10){
        playerWin();
      } else {
        reiniciarPunto();
      }
      sketch.loop();
    } else if(ball.scoreGame(sketch) == 2){
      sketch.noLoop();
      player2.score = player2.score + 1;
      if(player2.score == 10){
        playerWin();
      } else {
        reiniciarPunto();
      }
      sketch.loop();
    }
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

  function playerWin() {
    var marcador = "[ " + player1.score + " / " + player2.score + " ]";
    if(player1.score == 10){
      let miss = "Enhorabona has guanyat Player 1!\nTemps de Joc = " + timeGame + "\nMarcador Final = " + marcador + "\nPrem Ok per tornar a Jugar o Cancel per Sortir.";
      var continuar = confirm(miss);
      if(continuar == true){
        sketch.noLoop();
        restartGame();
      } else {
        window.history.back();
      }
    } else if(player2.score == 10) {
      let miss = "Enhorabona has guanyat Player 2!\nTemps de Joc = " + timeGame + "\nMarcador Final = " + marcador + "\nPrem Ok per tornar a Jugar o Cancel per Sortir.";
      var continuar = confirm(miss);
      if(continuar == true){
        sketch.noLoop();
        restartGame();
      } else {
        window.history.back();
      }
    }
  }

  function reiniciarPunto(){
    ball.spriteBall.position.x = 400;
    ball.spriteBall.position.y = 400;
    ball.iniciJoc(sketch);
  }

  function restartGame(){
    window.location.reload();
  }
}

var myp5 = new p5(s, 'myContainer');
