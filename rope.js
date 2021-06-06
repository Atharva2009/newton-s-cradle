class rope {
    constructor(bodyA,bodyB){
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness:0.04,
           length:10
       }
        this.Rope=Rope.create(options)
        World.add(world, this.Rope);
    }

    display(){
       var PointA=this.Rope.bodyA.position
       var PointB=this.Rope.bodyB.position
        strokeWeight(5)
    line(PointA.x,PointA.y,PointB.x,PointB.y)
      }
}