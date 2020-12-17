class Reply {
    constructor(text, x, y) {
        this.x = x;
        this.y = y;
        this.text = text;
    }

    update(index) {
        let elem = select("#reply-" + index);;
        if (mouseX >= this.x - 36 && mouseX <= this.x + 36 && mouseY >= this.y - 36 && mouseY <= this.y + 36) {
            currentReply = index;
            elem.addClass("active-reply");
        } else {
            elem.removeClass("active-reply");
        }
    }

    draw() {
        push();
        translate(-width / 2, -height / 2);
        image(replyImage, this.x, this.y);
        pop();
    }
}