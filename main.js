let W, H

let paddle
let balls = []
let blocks = []
let powerups = []
let block_colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function setup() {
  W = innerWidth
  H = innerHeight
  paddle = new Paddle(W/2, H-20, 200, 30)

  balls.push(new Ball(paddle.x+(paddle.w/2), paddle.y-10, 20, -6, -6))
  
  for (let i = 0; i < W; i += 50) {
    for (let j = 0; j < H/2; j += 20) {
      let color = block_colors[floor(random(block_colors.length))]
      blocks.push(new Block(i, j, 50, 20, color))
    }
  }

  createCanvas(W, H)
}

function draw() {
  background('black')
  
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
    powerup.update()
  })
}
