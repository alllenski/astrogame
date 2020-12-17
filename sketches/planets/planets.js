
let sun;
let button;

let slide;
let slides = [
    "<p>Somewhere in space...<p><br> \
    Move around with the mouse. Click anywhere to proceed.",
    "<p>A lone asteroid drifts alone...<p>",
    "<p>...but no celestial body is free from the laws of space...<p>",
    "<p>...and that's exactly what Kepler is about to say to the poor little asteroid.<p>",
    "<p>I think it's time you realize that you can't just do what you want in space, little asteroid.<p>",
    "<p>Just like how we have Newton's laws of motion, laws of thermodynamics, etc. <br><br>\
    So, are you ready to know more about Kepler's Laws?<p>",
    // Slide 1: Show path of orbits
    "<h1>Let's start by knowing what orbits are.</h1><br> \
    <p>An orbit is the path of a body revolving around an attracting centre of mass. <br><br> \
    It is the path that our planet and other planets take as time passes. In fact, it takes one year for the Earth \
    to complete one revolution around the sun. <br><br>\
    In the slide the the right the green dot represents a celestial body orbiting the white dot that represents the \
    attracting centre of mass. \
    </p>", 
    // Slide 2: Show planets/moons/etc.
    "<h1>How about celestial bodies?</h1><br> \
    <p>The Earth, Mars, Mercury and other planets are all examples of celestial bodies, they also all orbit the Sun. <br><br> \
    Likewise, the Sun is also a celestial body but also the attracting centre of mass for the planets in the solar system. <br> \
    The moon orbits the Earth which makes Earth also an attracting centre of mass, but both of them are still celestial bodies. <br>",
    // Slide 4: Changing points based on shape chosen
    "<p>But what do these orbits really look like?", 
    // Slide 5: Change from previous shape to ellipse
    "<h1>Orbits are elliptical and not circular</h1><br><p> Ellipses are described by their major and minor axis. <br> \
    These major and minor axes are why ellipses look like squashed circles. The major axis is the longest diameter of the \
    ellipse and the minor axis is the shortest diameter of the ellipse.  (although circles are ellipses too.)<br><br> \
    The green line on the right represents the major axis which is longer and the minor axis represents the minor axis which \
    is shorter. The major and minor axes always intersect at the center of the ellipse.", 
    // Slide 6: Off center sun
    "<h1>Eccentricity</h1><br><p>The attracting centre mass doesn't have to be in the center of the ellipse. \
    How far the Sun is off-center is called Eccentricity.", 
    // Slide 7: Kepler's Laws of Planetary Motion
    "<h1>Having said all that...</h1><br><p>Let me tell you about Kepler's Laws of planetary motion. These laws should help \
    you to understand the foundations of astronomy.", 
    // Slide 8: Label focus and orbit
    "<h1>Kepler's First Law</h1> <br> \
    <p>Each planet revolves around the Sun in an elliptical orbit with the Sun at one focus. The focus being one of two points \
    found along the major axis. These two points are called the foci of the ellipse and can also be used to compute or \
    describe ellipses.", 
    // Slide 9: Radius vector from Sun to Planet
    "<h1>Kepler's Second Law</h1> <br> \
    <p>A planet moves fastest when it is closest to the Sun and slowest when it is farthest from the sun. <br> \
    A radius vector joining any planet to the Sun sweeps out equal areas in equal lengths of time.",
    "<h1>Kepler's Third Law</h1> <br> \
    <p>There is a mathematical relationship between the time a planet takes to complete one revolution around the Sun and \
    its average distance from the Sun. The time required for a planet to make one revolution is called period revolution. \
    The average distance of Earth to the Sun is equal to 1 unit of distance which is called astronomical unit or AU.",
    "<p>But wait, that's not all! There are also...</p> <br> \
    <h1>Astronomical Measurements</h1> <br> \
    <p>Light Year<br> \
    Astronomical distances were adopted from the speed of light which is 299,793 km/sec, or usually expressed as 3 x 10<sup> \
    8</sup> in a vacuum. The speed of light defines how far light travelled in a certain perspective. <br><br> For example, the distance between the Earth and the Moon is 1.29 light seconds while the distance between the Earth \
    and the Sun is 8 light minutes.",
    "<h1>That's it!</h1><br> \
    Thank you for playing and I hope you learned something useful."
];

let currentSlide = 0;

let entities = [];
let replies = [];
let currentReply = 0;

let backgroundColor;

let drawArc = false;
let starSpeed = 5;

function preload() {
    font = loadFont('fonts/FiraCode-Regular.ttf');
    earthImage = loadImage('sketches/planets/earth.png');
    sunImage = loadImage('sketches/planets/sun.png');
    marsImage = loadImage('sketches/planets/mars.png');
    moonImage = loadImage('sketches/planets/moon.png');
    mercuryImage = loadImage('sketches/planets/mercury.png');
    playerImage = loadImage('sketches/planets/debris.png');
    keplerImage = loadImage('sketches/planets/keplerpixel2.png');
    replyImage = loadImage('sketches/planets/response.png');
    greenDotImage = loadImage('sketches/planets/green.png');
    whiteDotImage = loadImage('sketches/planets/white.png');
    ellipseImage = loadImage('sketches/planets/ellipse.png');
    arrowOneImage = loadImage('sketches/planets/arrow1.png');
    arrowTwoImage = loadImage('sketches/planets/arrow2.png');
}

function setup(){
    myCanvas = createCanvas(400, 400);
    myCanvas.parent("sketch");

    slide = select("#slide-holder");

    backgroundColor = color(0, 128);

    textFont(font);

    angleMode(DEGREES);
    imageMode(CENTER);
    
    entities.push(new Player());
    for (let i = 0; i < 10; i++) {
        entities.push(new Star());
    }

    changeSlide();

}

function draw() {
    background(backgroundColor);
    translate(width / 2, height / 2);
    if (drawArc) {
        stroke(255);
        fill(255);
        line(entities[0].x, entities[0].y, entities[1].x, entities[1].y);
    }
    for(let i = 0; i < replies.length; i++) {
        replies[i].update(i);
    }
    for(let i = 0; i < replies.length; i++) {
        replies[i].draw();
    }
    for(let i = 0; i < entities.length; i++) {
        entities[i].update();
    }
    for(let i = 0; i < entities.length; i++) {
        entities[i].draw();
    }
}

function mouseClicked() {
    next();
}

function next() {
    currentSlide++;
    changeSlide();
}

function changeSlide() {
    switch (currentSlide) {
        case 0:
            break;
        case 2:
            starSpeed = 4;
            break;
        case 3:
            starSpeed = 3;
            break;
        case 4:
            starSpeed = 2;
            entities.push(new Entity(keplerImage, 0, 0));
            replies.push(new Reply("Why not?", 32, 352));
            replies.push(new Reply("I can do whatever I want!", 106, 352));
            break
        case 5:
            starSpeed = 1;
            replies = [];
            if (currentReply == 0) {
                slides[currentSlide] = "<p>Because there are certain laws that need to be followed here in space.<p> \
                <br>" + slides[currentSlide]; 
            } else if (currentReply == 1) {
                slides[currentSlide] = "<p>No you can't! You must follow the laws in space.<p> \
                <br>" + slides[currentSlide]; 
            }
            replies.push(new Reply("Sure!", 32, 352));
            replies.push(new Reply("Nope...", 106, 352));
            break;
        case 6:
            replies = [];
            backgroundColor = color(0, 64);
            entities = [];
            entities.push(new Planet(120, 80, 800, greenDotImage));
            entities.push(new Entity(whiteDotImage, 0, 0));
            if (currentReply == 0) {
                slides[currentSlide] = "<p>Good!<p>\
                <br>" + slides[currentSlide]; 
            } else if (currentReply == 1) {
                slides[currentSlide] = "<p>Well, you have no choice anyway.<p> \
                <br>" + slides[currentSlide]; 
            }
            break;
        case 7:
            entities = [];
            entities.push(new Entity(sunImage));
            entities.push(new Planet(120, 80, 900, moonImage));
            entities.push(new Planet(120, 80, 800, earthImage));
            entities.push(new Planet(120, 80, 700, mercuryImage));
            entities.push(new Planet(120, 80, 600, marsImage));
            break;
        case 8:
            entities.push(new Player());
            replies.push(new Reply("Like a square?", 32, 352));
            replies.push(new Reply("Circular?", 106, 352));
            replies.push(new Reply("Elliptical?", 180, 352));
            replies.push(new Reply("Like a star!", 254, 352));
            break;
        case 9:
            entities = [];
            replies = [];
            if (currentReply == 0) {
                slides[currentSlide] = "<p>Square? No...<p>\
                <br>" + slides[currentSlide]; 
            } else if (currentReply == 1) {
                slides[currentSlide] = "<p>Circular? Close, but not quite.<p> \
                <br>" + slides[currentSlide]; 
            } else if (currentReply == 2) {
                slides[currentSlide] = "<p>Elliptical? Yep, you're right!<p> \
                <br>" + slides[currentSlide]; 
            } else if (currentReply == 3) {
                slides[currentSlide] = "<p>Not even close...<p> \
                <br>" + slides[currentSlide]; 
            }
            entities.push(new Entity(ellipseImage));
            break;
        case 10:
            entities.push(new Planet(40, 0, 800, sunImage));
            break;
        case 11:
            entities = [];
            break;
        case 12:
            entities.push(new Entity(sunImage, 10));
            entities.push(new Planet(120, 80, 800, earthImage));
            break;
        case 13:
            drawArc = true;
            break;
        case 14:
            drawArc = false;
            break;
        case 15:
            entities = [];
            entities.push(new Entity(arrowOneImage, 0, -90));
            entities.push(new Entity(arrowTwoImage, 0, 90));
            entities.push(new Entity(earthImage, -64, -90));
            entities.push(new Entity(moonImage, 64, -90));
            entities.push(new Entity(earthImage, -120, 90));
            entities.push(new Entity(sunImage, 120, 90));
            break;
        case 16:
            entities = [];
            entities.push(new Player());
            entities.push(new Entity(keplerImage));
            break;
        
    }
    slides[currentSlide] += "<br>";
    for (let i = 0; i < replies.length; i++) {
        slides[currentSlide] += "<br> <span id=\"reply-" + i + "\">" + "> " + replies[i].text + "</span><br>";
    }
    slide.html(slides[currentSlide]);
}

