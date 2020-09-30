class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.r = r;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(plinkopos.x, plinkopos.y);
      rectMode(CENTER)
      strokeWeight(3);
      fill(255,0,255)
      ellipse(0,0,this.r, this.r);
      pop()
    }
  };