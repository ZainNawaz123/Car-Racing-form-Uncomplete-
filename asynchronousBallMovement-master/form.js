class Form {
constructor() {
    this.input=createInput("name")
    this.button= createButton("play")
    this.greeting=createElement('h2')
}
hide(){
this.input.hide();
this.button.hide();
}
display(){
    var title= createElement('h2')
    title.html("Car Racing Game")
    title.position(450, 50)
    this.input.position(450, 200)
    this.button.position(450, 250)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
           playerCount=playerCount+1
           player.update();
           player.updateCount(playerCount) 
           this.greeting.html("Hello "+player.name)   
           this.greeting.position(500,250)       
    })


}
}

