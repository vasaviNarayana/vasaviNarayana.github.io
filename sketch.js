// setup() is called once at page-load
function setup() {
    createCanvas(800, 600);
}

function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(255);

    // clock face
    fill(240);
    noStroke();
    ellipse(400, 300, 400, 400);

    // hour pendulum
    drawPendulum(400, 300, hr % 12 + min / 60, 100, 0, 10, color(255, 182, 193)); // Light pink
    drawPendulum(400, 300, min + sec / 60, 150, PI / 4, 5, color(255, 0, 255)); // Magenta
    drawPendulum(400, 300, sec, 200, -PI / 4, 2, color(255, 105, 180)); // Rose

    fill(0);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text(nf(hr, 2) + ':' + nf(min, 2) + ':' + nf(sec, 2), 400, 550);
}


function drawPendulum(x, y, timeValue, length, angleOffset, weight, col) {
    let angle = map(timeValue, 0, 12, -PI / 2, PI / 2) + angleOffset;
    let pendulumX = x + cos(angle) * length;
    let pendulumY = y + sin(angle) * length;

    fill(col);
    stroke(col);
    strokeWeight(weight);
    line(x, y, pendulumX, pendulumY);

    fill(col);
    noStroke();
    ellipse(pendulumX, pendulumY, 20, 20);
}
