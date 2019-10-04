class Agents{
    constructor(name,agentPicture,crossSales,y){
        this.name = name;
        this.x =windowWidth * 0.015;
        this.crossSales = crossSales * windowWidth * 0.009 * 2;
        this.crossDisplay = crossSales;
        this.y = windowHeight * y / 25 + windowHeight * 0.05;
        this.speed = 5;
        this.agentPicture = agentPicture;
        this.r = windowHeight*0.02;
        this.d = this.r * 2;
    }
    show(){
        stroke(255);
        rect( - 50,this.y - this.r,windowWidth * 0.95,this.d);   
        textSize(this.d);
        fill(255);
        textStyle(ITALIC);
        text(this.name + " " + this.crossDisplay,windowWidth * 0.05,this.y + windowHeight * 0.015);
        image(this.agentPicture,this.x - this.r,this.y - this.r,this.d,this.d);
        //HITBOX
        noFill();
        noStroke();
        ellipse(this.x,this.y,this.d);
          
    }
    move(){
        if(this.x < this.crossSales){
            this.x = this.x + this.speed;
        }
    }
    hoverAgent(){
        let d = dist(mouseX ,mouseY,this.x,this.y );
         if(d < this.r){
            background(img);
            console.log("interaction");
            textSize(this.d * 4);
            fill(0);
            text(this.crossDisplay,windowHeight * 0.2,windowHeight *0.2);  
            image(this.agentPicture,windowWidth*0.30,windowHeight*0.10,windowWidth*0.40,windowHeight*0.80);  //display image
          
        }
    }
}
