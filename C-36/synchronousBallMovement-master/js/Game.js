class Game{
    constroctor(){}

 getState(){
      var gameStateRef = database.ref('gamestate');
      gameStateRef.on("value",function(data){
          gameState = data.val();
      })

 }
 update(State){
     database.ref('/').update(
         {
             gameState:state
         });
 }

 start(){
     if(gameState === 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();
         
     }
 }
}