class Chain{
  constructor(bodyA,bodyB,point){
      var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          pointB: point,
          stiffness:0.04,
          lenght: 10,
      }
      this.point = point
     this.chain=Constraint.create(options) 
     World.add (world,this.chain)
  }
display(){
var pointA = this.chain.bodyA.position
var pointB = this.chain.bodyB.position
push()
strokeWeight(3)
stroke("white")
line(pointA.x,pointA.y,pointB.x + this.point.x,pointB.y + this.point.y)
pop()
}
}