class chain{
    constructor(A,B){
        var abc={
            bodyA: A,
            bodyB: B,
            stiffness:2,
            length:10
        }
        this.chaon=Constraint.create(abc);
        World.add(world,this.chaon);
    }
    display(){
        line(this.chaon.bodyA.position.x,this.chaon.bodyA.position.y,this.chaon.bodyB.position.x,this.chaon.bodyB.position.y);
    }
}