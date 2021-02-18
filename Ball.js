class Ball {
    constructor(x,y,options) {
        var options = {
            isStatic: false,
           restitution: 1.0,
           /// friction:0.3
           density:0.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        //this.height = height;
        World.add(world, this.body);

       
      }
      display(){
        
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS);
        fill(255, 0, 252);
        noStroke()
        ellipse(0, 0, this.radius,this.radius);
       pop ();
      }
    }