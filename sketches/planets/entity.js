class Entity {
    constructor(image, ox = 0, oy = 0) {
        this.x = 0;
        this.y = 0;
        this.image = image;
        this.ox = ox;
        this.oy = oy;
        this.targetX = ox
    }

    update() {
    }

    draw() {
        push();
        translate(this.ox, this.oy);
        image(this.image, 0, 0);
        pop();
    }

    moveTo(x, y) {
        
    }
}