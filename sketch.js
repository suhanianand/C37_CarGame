var db;
var gs=0;
var pc, form, game, player, allPlayers;
var car1, car2, cars;
function setup(){
    createCanvas(displayWidth, displayHeight);
    db= firebase.database();
    game= new Game();
    game.readGameState();
    game.startGame();
}

function draw(){
if(pc===2){
    game.writeGameState(1);
}

if(gs===1){
    clear();
    game.play();
}
}
