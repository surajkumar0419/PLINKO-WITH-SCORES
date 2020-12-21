class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1,
            friction:0,
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        fill("white");
    var pos=this.body.position;
    ellipse(pos.x,pos.y,this.r=10);
    ellipseMode(RADIUS);
    }
}