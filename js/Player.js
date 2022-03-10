class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data){
      playerCount = data.val();
    });
  }
//BP
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }
  getDistance(){
    let playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      let dataa = data.val();
      this.positionX = dataa.positionX;
      this.positionY = dataa.positionY;
    })
  }
  addPlayer(){
    let playerIndex = "players/player" + this.index;

    if(this.index == 1){
      this.positionX = width/2 - 100;
    }
    else{
      this.positionX = width/2 + 100;
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    })
  }
 }

