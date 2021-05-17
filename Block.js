class Block{
    constructor(x, y, width, height){
        var options = {
            "restitution": 0.4,
            "friction": 1,
            "density": 10
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    } 
    display(){
        var angle = this.body.angle;
        var positions = this.body.position;

        push();
        translate(positions.x, positions.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black")
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}