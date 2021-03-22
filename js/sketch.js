var ghost;
var hero;
var asteriskAnimation = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
var asterisk;

function setup() {
  createCanvas(800, 300);

  //create a sprite and add the 3 animations
  ghost = createSprite(400, 150, 50, 100);
  hero = createSprite(400, 150, 50, 100);
  asterisk = createSprite(200,200,50,100);
  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  var myAnimation = ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  hero.addAnimation('moving', 'assets/player1/attack/tile001.png', 'assets/player1/attack/tile011.png');
  ghost.addAnimation('moving', 'assets/player2/attack/tile001.png', 'assets/player2/attack/tile007.png');

  ghost.addAnimation('spinning', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  ghost.addAnimation('spinning', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');

  asterisk.addAnimation("asteriskround", asteriskAnimation);
}

function draw() {
  background(255, 255, 255);

  asterisk.changeAnimation('asteriskround');

  //if mouse is to the left
  if(mouseX < ghost.position.x - 10) {
    ghost.changeAnimation('moving');
    //flip horizontally
    ghost.mirrorX(-1);
    //negative x velocity: move left
    ghost.velocity.x = -2;
  } else if(mouseX > ghost.position.x + 10) {
    ghost.changeAnimation('moving');
    //unflip
    ghost.mirrorX(1);
    ghost.velocity.x = 2;
  } else {
    //if close to the mouse, don't move
    ghost.changeAnimation('floating');
    ghost.velocity.x = 0;
  }

  if(mouseIsPressed) {
    //the rotation is not part of the spinning animation
    ghost.rotation -= 10;
    ghost.changeAnimation('spinning');
  } else {
    ghost.rotation = 0;
  }
  //up and down keys to change the scale
  //note that scaling the image quality deteriorates
  //and scaling to a negative value flips the image

  //EXEMPLE DE AUGMENTAR TAMANY I DISMINUIR
  /*
  if(keyIsDown(UP_ARROW))
    ghost.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    ghost.scale -= 0.05;
*/
