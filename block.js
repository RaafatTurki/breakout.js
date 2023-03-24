class Block {
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c

    this.broken = false
  }

  render() {
    if (!this.broken) {
      noStroke()
      fill(this.c)
      rect(this.x, this.y, this.w, this.h)
    }
  }
  
  update() {
  }

  break() {
    this.broken = true
  }
}
