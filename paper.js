  class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.2,
            density: 1,
            friction: 0.1,
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
        }

}
