class Planet extends Object {
    constructor(a, b, speed, image, ox = 0, oy = 0) {
        super(ox, oy, image);
        this.angle = 0;
        this.x;
        this.y;
        this.a = a;
        this.b = b;
        this.speed = speed;
        this.image = image;
        this.ox = ox;
        this.oy = oy;
    }

    update() {
        this.angle += 1 * (deltaTime / this.speed);
        if (this.angle > 360) {
            this.angle = 0;
        }
        this.x = this.a * Math.cos(this.angle);
        this.y = this.b * Math.sin(this.angle);
    }

    draw() {
        push();
        translate(this.ox, this.oy);
        image(this.image, this.x, this.y);
        pop();
    }
}