class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.slingshot);
    }

    display(){
  if (this.slingshot.bodyA){
    strokeWeight(4);
    line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y , this.pointB.x, this.pointB.y);
  }
       
    }
  
    fly(){
this.slingshot.bodyA=null

    }
}
