class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(myWorld, this.body);
    this.width = width;
    this.height = height;
  }

  display() {
    var fridge = this.body.position;
    rectMode(CENTER);
    fill("green");
    stroke("brown");
    strokeWeight(2);
    rect(fridge.x, fridge.y, this.width, this.height);
  }
}
