class Powerup {

  constructor(x, y, r) {
    this.x = x
    this.y = y
    this.vspd = 1
    this.r = r
    this.consumed = false
  }

  render() {
    if (!this.consumed) {
      noStroke()
      fill('#04D9FF')
      ellipse(this.x, this.y, this.r)
    }
  }

  check_paddle_collision(paddle) {
    if (!this.consumed) {
      if (this.x > paddle.x && this.x < paddle.x + paddle.w && this.y + (this.r / 2) > paddle.y && this.y < paddle.y + paddle.h) {
        this.consumed = true
        //u put shit here
        balls.push(new Ball(this.x, this.y, this.r, -6, -6))
      }
    }
  }
  update(paddle) {
    this.check_paddle_collision(paddle)
    this.y += this.vspd
  }
}
