class Player extends Entity {
    constructor() {
        super(playerImage)
        this.x = 0;
        this.y = 0;
    }

    update() {
        this.x = constrain(lerp(this.x, mouseX, 0.05), 32, width - 32);
        this.y = constrain(lerp(this.y, mouseY, 0.05), 32, height - 32);
    }

    draw() {
        push();
        translate(-width / 2, -height / 2);
        image(this.image, this.x, this.y);
        pop();
    }
}