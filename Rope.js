
class Rope {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
  display(){
line(this.rope.body1.position.x,this.rope.body1.position.y,this.rope.body2.position.x,this.rope.body2.position.y);
  }  
}