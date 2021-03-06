import Ball from "../js/ball.js";
import Player from "../js/player.js";
import { timeGame } from '../js/status.js';
import { startArray } from '../js/config.js';

export var player1;
export var player2;
export var startTime = 0;
var ball;
var imageMapBasic;
var imageMapSpace;
var imageMapSea;
var mySoundDragonBall;
var mySoundSuperMario;
var mySoundJurassicPark;

const s = ( sketch ) => {

  sketch.preload = function(){
    imageMapBasic = sketch.loadImage('image/mapaBasic.jpg');
    imageMapSpace = sketch.loadImage('image/mapaSpace.jpg');
    imageMapSea = sketch.loadImage('image/mapaSea.jpeg');
    sketch.soundFormats('mp3', 'ogg');
    mySoundDragonBall = sketch.loadSound('assets/DragonBall.mp3');
    mySoundJurassicPark = sketch.loadSound('assets/JurassicPark.mp3');
    mySoundSuperMario = sketch.loadSound('assets/SuperMario.mp3');
    player1 = new Player("player1", sketch);
    player2 = new Player("player2", sketch);
    ball = new Ball(sketch);

  }

  sketch.setup = function(){
    sketch.createCanvas(800, 840);
    ball.startGame(sketch);
  }

  sketch.draw = function(){
    if(startArray[0] == true){
      startTime = 1;
      player1.spritePlayer.debug = sketch.mouseIsPressed;
      player2.spritePlayer.debug = sketch.mouseIsPressed;
      ball.spriteBall.debug = sketch.mouseIsPressed;

      selectMapa();
      selectMusic();

      movePlayer(startArray[1]);
      sketch.drawSprites();

      ball.bounceBorder(sketch);
      ball.bouncePlayer(player1);
      ball.bouncePlayer(player2);

      restartPoint();
    }
  }

  function speedGame(){
      console.log(startArray[2]);
      switch (startArray[2]) {
        case "1":
          return 2;
          break;
        case "2":
          return 4;
          break;
        case "3":
          return 6;
          break;
        case "4":
          return 8;
          break;
      }
  }

  function selectMusic(){
    switch (startArray[3]) {
      case "1":
        if(!mySoundDragonBall.isPlaying()){
          mySoundDragonBall.play();
        }
        break;
      case "2":
        if(!mySoundJurassicPark.isPlaying()){
          mySoundJurassicPark.play();
        }
        break;
      case "3":
        if(!mySoundSuperMario.isPlaying()){
          mySoundSuperMario.play();
        }
        break;
    }
  }

  function stopMusic(){
    if(mySoundDragonBall.isPlaying()){
      mySoundDragonBall.stop();
    }

    if(mySoundJurassicPark.isPlaying()){
      mySoundJurassicPark.stop();
    }

    if(mySoundSuperMario.isPlaying()){
      mySoundSuperMario.stop();
    }
  }

  function selectMapa(){
    switch (startArray[4]) {
      case "1":
        sketch.background(imageMapBasic);
        break;
      case "2":
        sketch.background(imageMapSpace);
        break;
      case "3":
        sketch.background(imageMapSea);
        break;
    }
  }

  function restartPoint(){
    if(ball.scoreGame(sketch) == 1){
      sketch.noLoop();
      player1.score = player1.score + 1;
      if(player1.score == 10){
        playerWin();
        stopMusic();
      } else {
        reiniciarPunto(1);
      }
      sketch.loop();
    } else if(ball.scoreGame(sketch) == 2){
      sketch.noLoop();
      player2.score = player2.score + 1;
      if(player2.score == 10){
        playerWin();
        stopMusic();
      } else {
        reiniciarPunto(2);
      }
      sketch.loop();
    }
  }

  function movePlayer(nPlayerK) {
    if(nPlayerK == "1"){
      if(sketch.keyIsDown(sketch.LEFT_ARROW)) {
        player1.moveLeft(sketch);
      } else if(sketch.keyIsDown(sketch.RIGHT_ARROW)) {
        player1.moveRight(sketch);
      } else {
        player1.stopMovePlayer();
      }

    } else if(nPlayerK == "2"){
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

  function playerWin() {
    var marcador = "[ " + player1.score + " / " + player2.score + " ]";
    if(player1.score == 10){
      let miss = "Enhorabona has guanyat Player 1!\nTemps de Joc = " + timeGame
      + "\nMarcador Final = " + marcador
      + "\nPrem Ok per tornar a Jugar o Cancel per Sortir.";
      var continuar = confirm(miss);
      if(continuar == true){
        sketch.noLoop();
        restartGame();
      } else {
        window.history.back();
      }
    } else if(player2.score == 10) {
      let miss = "Enhorabona has guanyat Player 2!\nTemps de Joc = " + timeGame
      + "\nMarcador Final = " + marcador
      + "\nPrem Ok per tornar a Jugar o Cancel per Sortir.";
      var continuar = confirm(miss);
      if(continuar == true){
        sketch.noLoop();
        restartGame();
      } else {
        window.history.back();
      }
    }
  }

  function reiniciarPunto(i){
    ball.spriteBall.position.x = 400;
    ball.spriteBall.position.y = 400;
    if(i == 1){
      ball.startGameAfterPoint(sketch, "player2");
    } else if(i == 2){
      ball.startGameAfterPoint(sketch, "player1");
    }
  }

  function restartGame(){
    window.location.reload();
  }
}

var myp5 = new p5(s, 'myContainer');
