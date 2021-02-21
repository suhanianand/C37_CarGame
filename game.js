class Game{
 constructor(){
}
readGameState(){
    db.ref('gameState').on("value",function(data){
        gs=data.val()
    })
}
writeGameState(state){
    db.ref('/').update({gameState:state})
}
async startGame(){
    if (gs===0){
      player= new Player();
      var playerCountRef= await db.ref('playerCount').once("value")
      if(playerCountRef.exists()){
        pc=playerCountRef.val()
        player.getCount();
      }
        form= new Form();
        form.display();
    }
    car1= createSprite(100,200);
    car2= createSprite(300,200);
    cars= [car1,car2]
}
play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!== undefined){
    var index=0;
    //x and y position of the cars
    var x=0, y=0;
        for(var plr in allPlayers){    
        index=index+1;
        x=x+200;
        y= displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index===player.index){
            cars[index-1].shapeColor= "red";
            camera.position.x= displayWidth/2;
            camera.position.y= cars[index-1].y;
        }
        }
        if(keyDown(UP_ARROW) && player.index!== null){
            player.distance=player.distance+10;
            player.update();
        }
        drawSprites();
    }
}
}