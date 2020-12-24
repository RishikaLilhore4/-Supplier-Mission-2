class Box{
    constructor(x,y,width,height){
        var options = {
        "restitution":1.0       
     }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
display(){
    rectMode(CETER);
    rect(ball.position.x, ball.position.y, 20, 20); 
}

}
