let W, H
let CW = 40
let CH = 40

let paddle
let balls = []
let blocks = []
let powerups = []
let backgroundImage

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function preload(){
  backgroundImage = loadImage('assets/bg.jpg')
}

function keyIsPressed(){
  if (keyCode == LEFT_ARROW){
    paddle.x += -5
  
  }
  else if (keycode == RIGHT_ARROW){
    paddle.x += 5
  }
}

function setup() {
  W = CW * map[0].length
  H = CH * map.length

  paddle = new Paddle(W/2, H-20, 200, 5, 15)

  balls.push(new Ball(paddle.x+(paddle.w/2), paddle.y-10, 20, -3, -3))

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      let t = map[i][j]
      if (t == 0) continue
      blocks.push(new Block(j*CW, i*CH, CW, CH, t))
    }
  }

  createCanvas(W, H)
}

function draw() {
  background('#162F4B')
  image(backgroundImage, 0, 0, W, H)

  paddle.render()
  paddle.update()

  balls.forEach(ball => {
    ball.render()
    ball.update(paddle, blocks)
  })

  blocks.forEach(block => {
    block.render()
    block.update()
  })

  powerups.forEach(powerup => {
    powerup.render()
    powerup.update(paddle)
  })
}
