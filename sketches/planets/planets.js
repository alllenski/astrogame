
let sun;
let button;

let slide;
let slides = [
    "Somewhere in space...<br> \
    Move around with the mouse. Click anywhere to proceed.",
    "A lone asteroid drifts, boundless and free...",
    // Slide 1: Show path of orbit
    "<h1>First of all, what are orbits? </h1> \
    <p>An orbit is the path of a body revolving around an attracting centre of mass. <br> \
    It is the path that our planet and other planets take as time passes. In fact, it takes one year for the Earth \
    to complete one revolution around the sun.</p>", 
    // Slide 2: Show planets/moons/etc.
    "<h1>Planets and celestial bodies</h1> \
    <p>Planets like the Earth, Mars, etc. all orbit the Sun. <br> \
    Attracting centres of mass can also be other celestial bodies like planets, suns, asteroids, etc.</p>", 
    // Slide 4: Changing points based on shape chosen
    "But what do these orbits really look like?", 
    // Slide 5: Change from previous shape to ellipse
    "Orbits are elliptical and not circular (although circles are ellipses too.)", 
    // Slide 6: Off center sun
    "The attracting centre mass doesn't have to be in the center of the ellipse. \
    How far the Sun is off-center is called Eccentricity.", 
    // Slide 7: Kepler's Laws of Planetary Motion
    "Kepler's Laws of planetary motion.", 
    // Slide 8: Label focus and orbit
    "Kepler's First Law <br> \
    Each planet revolves around the Sun in an elliptical orbit with the Sun at one focus.", 
    // Slide 9: Radius vector from Sun to Planet
    "Kepler's Second Law <br> \
    A planet moves fastest when it is closest to the Sun and slowest when it is farthest from the sun. <br> \
    A radius vector joining any planet to the Sun sweeps out equal areas in equal lengths of time.",
    "Kepler's Third Law <br> \
    There is a mathematical relationship between the time a planet takes to complete one revolution around the Sun and its average distance from the Sun.",
];

let currentSlide = 0;

let entities = [];

let backgroundColor;

let drawArc = false;

function preload() {
    font = loadFont('fonts/FiraCode-Regular.ttf');
    earthImage = loadImage('sketches/planets/earth.png');
    sunImage = loadImage('sketches/planets/sun.png');
    marsImage = loadImage('sketches/planets/mars.png');
    moonImage = loadImage('sketches/planets/moon.png');
    mercuryImage = loadImage('sketches/planets/mercury.png');
    playerImage = loadImage('sketches/planets/debris.png');
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
    slide.html(slides[currentSlide]);
    switch (currentSlide) {
        case 0:
            break;
        case 1:
            entities.push(new Planet(120, 80, 800, earthImage));
            break;
        case 2:
            entities = [];
            entities.push(new Entity(marsImage));
            entities.push(new Entity(moonImage, 64));
            entities.push(new Entity(earthImage, -64));
            break;
        case 4:
            backgroundColor = color(0, 16);
            break;
        case 5:
            backgroundColor = color(0, 0);
            break;
        case 6:
            backgroundColor = color(0, 64);
            entities[0].a = width / 8;
            break;
        case 8:
            backgroundColor = color(0, 200);
            entities.pop();
            entities[0].speed = 0;
            break;
        case 9:
            drawArc = true;
            break;
    }
        
}

