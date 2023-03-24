class Ball {
  constructor(x, y, r, hspd, vspd) {
    this.x = x
    this.y = y
    this.r = r

    this.hspd = hspd
    this.vspd = vspd
  }

  render() {
    noStroke()
    fill('red')
    ellipse(this.x, this.y, this.r)
  }

  update(paddle, blocks) {
    // left and right wall check
    if (this.x < 0 || this.x > innerWidth) this.hspd *= -1
    // top wall check
    if (this.y < 0) this.vspd *= -1

    this.check_paddle_collision(paddle)
    
    blocks.forEach(block => {
      this.check_block_collision(block)
    })

    this.x += this.hspd
    this.y += this.vspd
  }

  check_paddle_collision(paddle) {
    if (this.x > paddle.x && this.x < paddle.x+paddle.w && this.y > paddle.y && this.y < paddle.y+paddle.h) this.vspd *= -1
  }

  check_block_collision(block) {
    if (block.broken) return
    if (this.x > block.x && this.x < block.x+block.w && this.y > block.y && this.y < block.y+block.h) {
      this.vspd *= -1
      block.break()
      balls.push(new Ball(this.x, this.y, 10, this.hspd*-1, this.vspd))
    }
  }
}
