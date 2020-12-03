class Player extends Entity {
    constructor() {
        super(playerImage)
        this.x = 0;
        this.y = 0;
    }

    update() {
        this.x = lerp(this.x, mouseX, 0.05);
        this.y = lerp(this.y, mouseY, 0.05);
    }

    draw() {
        push();
        translate(-width / 2, -height / 2);
        image(this.image, this.x, this.y);
        pop();
    }
}