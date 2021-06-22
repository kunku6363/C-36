var canvas,backgroundImage;
var gameState = 0;
var playerCount ;
var dataBase;
var form, player, game;

function setup(){
  canvas = createCanvas(00,400);
  database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
  
}

