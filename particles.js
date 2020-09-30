class Particles {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.r = r;
      this.x = x;
      this.y = y;
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
      strokeWeight(3);
      fill(255,0,255)
      ellipse(0,0,this.r, this.r);
      pop()
    }
  };