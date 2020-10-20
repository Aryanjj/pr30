class Box {
    constructor(x, y, width, height) {

        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
    }
    display() {
        push();
        if (this.body.speed < 3) {
            
        
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);

            rectMode(CENTER);
            fill(255);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            // push()
            // this.visibility = this.visibility - 5;

            // tint(255, this.visibility);

            // rect(this.body.position.x, this.body.position.y, 50, 50);
            // // this.visibility = this.visibility - 5;
            // pop()
        }
    }
}
// class  extends BaseClass {
//   constructor(x, y) {
//     super(x, y, 50, 50);
//     this.image = loadImage("sprites/enemy.png");
//     this.visibility = 255;
//   }
//   display() {
//     // super.display();
//     console.log(this.body.speed);
//     if (this.body.speed < 3) {
//       super.display();
//     } else {
//       World.remove(world, this.body);
//       push()
//       this.visibility = this.visibility - 5;

//       tint(255, this.visibility);

//       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
//       // this.visibility = this.visibility - 5;
//       pop()
//     }
//   }

// };