class Paddle {
  constructor(x, y, w, h, spd) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.spd = spd
  }

  render() {
    noStroke()
    fill('#FFEFFF')
    rect(this.x, this.y, this.w, this.h)
  }

  update() {
    this.x += (keyIsDown(RIGHT_ARROW) - keyIsDown(LEFT_ARROW)) * this.spd
  }
}
