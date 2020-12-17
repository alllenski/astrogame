class Star {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
    }

    update() {
        this.x = this.x - starSpeed;
        if (this.x < 0) {
           this.x = width;
        }
    }

    draw() {
        push(); 
        translate(-width / 2, -height / 2);
        stroke(255);
        strokeWeight(4);
        point(this.x, this.y);
        pop();
    }
}