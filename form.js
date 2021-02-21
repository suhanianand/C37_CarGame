class Form{
    constructor(){
        this.input= createInput("Name");
            this.button= createButton("play");
            this.greeting= createElement("h2");
    }
    display(){
        var title= createElement("h1");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2-30);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name= this.input.value();
            pc++;
            player.index= pc; 
            player.update();
            player.updateCount(pc);
            this.greeting.html("welcome "+ player.name);
            this.greeting.position(displayWidth/2-50,displayHeight/2-50);
        })
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}