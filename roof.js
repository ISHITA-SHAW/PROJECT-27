class roof {
    constructor(x,y,width,height){
       this.body = bodies.rectangle(x,y,width,height,{isStatic : true})
       this.width = width;
       this.height = height;
       World.add = (world,this.bodies)

        }
        
        
        
    
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}