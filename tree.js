class Tree {

    constructor(x, y, width, height) {

        var options={
            isStatic:true,
            restitution:1,
            friction:1,
            density:1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
        
    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

}