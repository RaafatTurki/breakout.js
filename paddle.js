class Paddle {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  render() {
    noStroke()
    fill('white')
    rect(this.x, this.y, this.w, this.h)
  }

  update() {
    this.x = mouseX - (this.w/2)
  }
}
