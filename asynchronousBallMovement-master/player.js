class Player{
    constructor(){
this.name=null
this.distance=0
this.index=null
    }
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value", function (data) {
            playerCount=data.val();
        })
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    update(){
var playerIndex="player" + playerCount
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})
    }
    static getPlayerInfo() {
        var playerInfoRef=datatbase.ref('players')
        playerInfoRef.on("value", function(data){
            allPlayers=data.val();
        })
    }
}
