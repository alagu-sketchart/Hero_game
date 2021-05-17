class Monster{
    constructor(x, y, width, height){
       var options = {
        isStatic: true,
        restitution: 0.5,
        friction: 1,
        density: 0.2
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Monster.jpg");
       World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}