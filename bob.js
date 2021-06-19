class bob {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:1,
            density:7.8,
        }
        this.bodies = Bodies.circle(x,y,25,options);
        World.add = (world,this.bodies)

        console.log(this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}