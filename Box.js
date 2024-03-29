class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(myWorld, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    rectMode(CENTER);
    fill("pink");
    stroke("purple");
    strokeWeight(4);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
