let cakeImg;
let candleImg;
let flameImg;

function preload() {
  cakeImg = loadImage('image/image 45.png');
  candleImg = loadImage('image/image 45.png');
  flameImg = loadImage('image/image 45.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  image(cakeImg, 0, 0, 400, 400);

  let candles = [
    { x: 100, y: 160, age: 5 },
    { x: 180, y: 190, age: 3 },
    { x: 300, y: 200, age: 1 }
  ];

  for (let i = 0; i < candles.length; i++) {
    let candle = candles[i];
    let flameY = candle.y - 70 + sin(frameCount / 10) * 10;
    image(flameImg, candle.x - 10, flameY, 20, 40);
    image(candleImg, candle.x - 10, candle.y, 20, 80);

    textSize(20);
    textAlign(CENTER, CENTER);
    text(candle.age, candle.x, candle.y + 60);
  }
}
